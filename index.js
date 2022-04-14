addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function hata(e) {
  return new Response('Hata: ' + e, {
    status: 404,
    headers: { 'content-type': 'text/plain;charset=utf-8' }
  });
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const params = url.searchParams;
  console.log(url.pathname);
  if (url.pathname === "/auth") {
    const response_type = params.get("response_type");
    if (response_type !== 'code')
      return hata("Sadece 'code' destekleniyor");

    const client_id = params.get("client_id");
    if (client_id !== 'F5CAA82F-E2CF-4F21-A745-471ABE3CE7F8')
      return hata("Hatalı client_id");

    let redirect_uri = params.get("redirect_uri");

    const scope = params.get("scope");
    if (scope !== 'Temel-Bilgileri')
      return hata("Sadece Temel-Bilgileri alınabilir.");

    const state = params.get("state");
    redirect_uri = decodeURIComponent(redirect_uri) +
      "?code=AC22345678902&state=" + state;
    return Response.redirect(redirect_uri, 302);
  } else if (url.pathname === '/token') {
    if (request.method !== 'POST')
      return hata("POST'layın");

    data = await request.formData();
    if (data.get("grant_type") !== 'authorization_code')
      return hata("'authorization_code' olmalı");
    const code = data.get("code");
    if (!code || !code.startsWith("AC"))
      return hata("invalid auth code");
    if (data.get('client_id') !== 'F5CAA82F-E2CF-4F21-A745-471ABE3CE7F8')
      return hata('Hatalı client_id');
    if (data.get('client_secret') !== 'B97B789F-9D0F-48AF-AD09-0721979D0E9F')
      return hata('Hatalı client_secret');
    const response = {
      access_token: "AT" + code.substr(2),
      token_type: "bearer",
      expires_in: 0,
      scope: "Temel-Bilgileri"
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })
  } else if (url.pathname === '/temel-bilgileri') {
    if (request.method !== 'GET')
      return hata('invalid method');

    const auth = request.headers.get('authorization');
    if (!auth || !auth.startsWith("Bearer AT"))
      return hata("Faké auth token AT ile başlamalı");
    const response = {
      ad: "Kaan",
      soyad: "Ankara",
      dt: "1975.06.12",
      TCKN: auth.slice(9),
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })
  }

  return new Response('authorization_code almak için /auth\nDaha fazla detay için https://github.com/KimlikDAO/mock-oauth2', {
    headers: { 'content-type': 'text/plain;charset=utf-8' },
  })
}
