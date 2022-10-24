# Mock OAuth2 sunucusu

Test oauth2 sunucusu https://mock-oauth2.kimlikdao.net adresinde hizmet veriyor.
Test sunucusunu yerel olarak böyle başlatabiliriz:
``` shell
wrangler dev --local
```

Auth code'u şu şekilde alabiliriz:
```shell
curl 'localhost:8787/auth?response_type=code&client_id=F5CAA82F-E2CF-4F21-A745-471ABE3CE7F8&redirect_uri=https://kimlikdao.org&scope=Temel-Bilgileri' 
```

Bir sonraki adım auth code ile `access_token` almak:
```shell
curl localhost:8787/token -d 'grant_type=authorization_code&code=AC22345678902&client_id=F5CAA82F-E2CF-4F21-A745-471ABE3CE7F8&client_secret=B97B789F-9D0F-48AF-AD09-0721979D0E9F'
```

Aldığımız `access_token` ile kullanıcı `Temel-Bilgileri`'ne ulaşabiliriz:
```shell
curl localhost:8787/veri -H "Authorization: Bearer AT22345678902"
```
