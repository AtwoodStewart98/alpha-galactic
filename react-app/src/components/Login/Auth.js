import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "austinsmith.auth0.com",
    clientId: "AxNKhX1N4gw1DlZviUZELHJVTyQHpJdi",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://austinsmith.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
