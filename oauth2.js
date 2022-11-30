/**
 * @fileoverview Mock e-devlet oauth2 server
 *
 * @author KimlikDAO
 */

const PEOPLE = {
  "22345678902": {
    "Temel-Bilgileri": /** @type {nvi.TemelBilgileri} */({
      ad: "Kaan",
      soyad: "Ankara",
      dt: "1975.06.12",
      TCKN: "22345678902",
      dyeri: "Ankara",
      cinsiyet: "M"
    }),
    "Iletisim-Bilgileri": /** @type {nvi.IletisimBilgileri} */({
      eposta: "kaan.ankara@ptt.gov.tr",
      telefon: "+90(555)555-55-55",
      KEP: "kaan.ankara@hs01.kep.tr",
    }),
    "Kutuk-Bilgileri": /** @type {nvi.KutukBilgileri} */({
      il: "Ankara",
      ilçe: "Çankaya",
      mahalle: "Anıtkaya Mahallesi",
      cilt: 40,
      hane: 7,
      BSN: 33,
      tescil: "1975.06.13",
      annead: "Fatma",
      babaad: "Mehmet",
      mhali: "Bekâr",
    }),
    "Adres-Bilgileri": /** @type {nvi.AdresBilgileri} */({
      il: "Ankara",
      ilçe: "Şereflikoçhisar",
      mahalle: "Yusufkuyusu Mahallesi",
      CSBM: "Yusufkuyusu",
      dışKapı: "1",
      içKapı: ""
    })
  },
  "43219345971": {
    "Temel-Bilgileri": /** @type {nvi.TemelBilgileri} */({
      ad: "Mehmet",
      soyad: "Ankara",
      dt: "1949.03.29",
      TCKN: "43219345971",
      dyeri: "Ankara",
      cinsiyet: "M"
    }),
    "Iletisim-Bilgileri": /** @type {nvi.IletisimBilgileri} */({
      eposta: "mehmet.ankara@hotmail.com",
      telefon: "+90(530)300-30-30",
    }),
    "Kutuk-Bilgileri": /** @type {nvi.KutukBilgileri} */({
      il: "Ankara",
      ilçe: "Çankaya",
      mahalle: "Anıtkaya Mahallesi",
      cilt: 40,
      hane: 7,
      BSN: 32,
      tescil: "1949.03.29",
      annead: "Hayriye",
      babaad: "Hayri",
      mhali: "Evli",
    }),
    "Adres-Bilgileri": /** @type {nvi.AdresBilgileri} */({
      il: "Ankara",
      ilçe: "Şereflikoçhisar",
      mahalle: "Yusufkuyusu Mahallesi",
      CSBM: "Yusufkuyusu",
      dışKapı: "1",
      içKapı: ""
    })
  },
  "76276456321": {
    "Temel-Bilgileri": /** @type {nvi.TemelBilgileri} */({
      ad: "Fatma",
      soyad: "Ankara",
      dt: "1947.08.25",
      TCKN: "76276456321",
      dyeri: "Samsun",
      cinsiyet: "F"
    }),
    "Iletisim-Bilgileri": /** @type {nvi.IletisimBilgileri} */({
      eposta: "fatma1947@gmail.com",
      telefon: "+90(532)325-20-20",
    }),
    "Kutuk-Bilgileri": /** @type {nvi.KutukBilgileri} */({
      il: "Samsun",
      ilçe: "Atakum",
      mahalle: "Mimarsinan Mahallesi",
      cilt: 40,
      hane: 3,
      BSN: 32,
      tescil: "1947.08.25",
      annead: "Fadime",
      babaad: "Ali",
      mhali: "Evli",
    }),
    "Adres-Bilgileri": /** @type {nvi.AdresBilgileri} */({
      il: "Ankara",
      ilçe: "Şereflikoçhisar",
      mahalle: "Yusufkuyusu Mahallesi",
      CSBM: "Yusufkuyusu",
      dışKapı: "1",
      içKapı: ""
    })
  },
  "1290543783": {
    "Temel-Bilgileri": /** @type {nvi.TemelBilgileri} */({
      ad: "Hayri",
      soyad: "Ankara",
      dt: "1919.02.09",
      TCKN: "1290543783",
      dyeri: "Ankara",
      cinsiyet: "M"
    }),
    "Iletisim-Bilgileri": /** @type {nvi.IletisimBilgileri} */({
      telefon: "+90(532)930-50-50",
    }),
    "Kutuk-Bilgileri": /** @type {nvi.KutukBilgileri} */({
      il: "Ankara",
      ilçe: "Altındağ",
      mahalle: "İstiklal Mahallesi",
      cilt: 35,
      hane: 4,
      BSN: 31,
      tescil: "1919.02.09",
      annead: "Hatice",
      babaad: "Osman",
      mhali: "Evli",
    }),
    "Adres-Bilgileri": /** @type {nvi.AdresBilgileri} */({
      il: "Ankara",
      ilçe: "Şereflikoçhisar",
      mahalle: "Yusufkuyusu Mahallesi",
      CSBM: "Yusufkuyusu",
      dışKapı: "1",
      içKapı: ""
    })
  },
  "6034126892": {
    "Temel-Bilgileri": /** @type {nvi.TemelBilgileri} */({
      ad: "Hayriye",
      soyad: "Ankara",
      dt: "1921.02.09",
      TCKN: "6034126892",
      dyeri: "Ankara",
      cinsiyet: "F"
    }),
    "Iletisim-Bilgileri": /** @type {nvi.IletisimBilgileri} */({
      telefon: "+90(532)421-10-10",
    }),
    "Kutuk-Bilgileri": /** @type {nvi.KutukBilgileri} */({
      il: "Ankara",
      ilçe: "Çankaya",
      mahalle: "Anıttepe Mahallesi",
      cilt: 28,
      hane: 9,
      BSN: 31,
      tescil: "1921.02.09",
      annead: "Fevziye",
      babaad: "Fethi",
      mhali: "Evli",
    }),
    "Adres-Bilgileri": /** @type {nvi.AdresBilgileri} */({
      il: "Ankara",
      ilçe: "Şereflikoçhisar",
      mahalle: "Yusufkuyusu Mahallesi",
      CSBM: "Yusufkuyusu",
      dışKapı: "1",
      içKapı: ""
    })
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
    "?code=AC22345678902&state=" + params.get("state"),
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
    /** @const {OAuthAccessToken} */
    const response = {
      access_token: "AT" + code.substr(2),
      token_type: "bearer",
      expires_in: 0,
      scope: Object.keys(PEOPLE["22345678902"]).join(",")
    }
    return new Response(JSON.stringify(response), {
      headers: {
        'content-type': 'application/json;charset=utf-8',
        'cache-control': 'no-store'
      }
    })
  });
}

const handleData = (request) => new Response(
  JSON.stringify(PEOPLE[request.headers.get('authorization').slice(9)]), {
  headers: { 'content-type': 'application/json;charset=utf-8' }
});

export default {
  /**
   * @param {Request} request
   * @return {Promise<Response>|Response}
   */
  fetch(request) {
    const url = new URL(request.url);
    switch (url.pathname) {
      case "/auth": return handleAuth(url.searchParams);
      case "/token": return handleToken(request);
      case "/bilgi": return handleData(request);
    }
    return err("Bilinmeyen pathname");
  }
}
