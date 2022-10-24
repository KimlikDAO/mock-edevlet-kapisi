/**
 * @fileoverview Mock e-devlet oauth2 server
 * @author KimlikDAO
 */

const PEOPLE = {
  "22345678902": {
    "personInfo": /** @type {PersonInfo} */({
      first: "Kaan",
      last: "Ankara",
      dateOfBirth: "1975.06.12",
      localIdNumber: "22345678902",
      cityOfBirth: "Ankara",
      gender: "M"
    }),
    "contactInfo": /** @type {ContactInfo} */({
      email: "kaan.ankara@ptt.gov.tr"
    }),
    "kütükBilgileri": /** @type {KütükBilgileri} */({
      annead: "Ayşe",
      babaad: "Mehmet",
      mhali: "Bekar",
    }),
  }
}

/**
 * @param {string} message
 * @return {Response}
 */
const err = (message) => {
  return new Response('Hata: ' + message, {
    status: 404,
    headers: { 'content-type': 'text/plain;charset=utf-8' }
  });
}

/**
 * @param {URLSearchParams} params
 * @return {Response}
 */
const handleAuth = (params) => {
  if (params.get("response_type") !== 'code')
    return err("Sadece `code` destekleniyor");

  if (params.get("client_id") !== 'F5CAA82F-E2CF-4F21-A745-471ABE3CE7F8')
    return err("Hatalı `client_id`");

  return Response.redirect(
    decodeURIComponent(/** @type {string} */(params.get("redirect_uri"))) +
    "#code=AC22345678902&state=" + params.get("state"),
    302);
}

/**
 * @param {Request} request
 * @return {Promise<Response>|Response}
 */
const handleToken = (request) => {
  if (request.method !== 'POST')
    return err("POST'layın");

  return request.formData().then((data) => {
    if (data.get("grant_type") !== 'authorization_code')
      return err("'authorization_code' olmalı");

    const code = data.get("code");
    if (!code || !code.startsWith("AC"))
      return err("Hatalı `code`");
    if (data.get('client_id') !== 'F5CAA82F-E2CF-4F21-A745-471ABE3CE7F8')
      return err('Hatalı `client_id`');
    if (data.get('client_secret') !== 'B97B789F-9D0F-48AF-AD09-0721979D0E9F')
      return err('Hatalı `client_secret`');
    const response = {
      access_token: "AT" + code.substr(2),
      token_type: "bearer",
      expires_in: 0,
      scope: "Temel-Bilgileri,Iletisim-Bilgileri"
    }
    return new Response(JSON.stringify(response), {
      headers: { 'content-type': 'application/json;charset=utf-8' }
    })
  });
}

const handleData = (request) => new Response(
  JSON.stringify(PEOPLE[request.headers.get('authorization').slice(9)]), {
  headers: { 'content-type': 'application/json;charset=utf-8' }
});

export default {
  /**
   * @param {CFWorkersRequest} request
   * @return {Promise<Response>|Response}
   */
  fetch(request) {
    const url = new URL(request.url);
    switch (url.pathname) {
      case "/auth": return handleAuth(url.searchParams);
      case "/token": return handleToken(request);
      case "/bilgi": return handleData(request);
    }
    return err("Bilinmeyen pathname")
  }
}
