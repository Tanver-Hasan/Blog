import { Injectable } from "@angular/core";
import * as auth0 from "auth0-js";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { HttpClientModule, HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
(window as any).global = window;
@Injectable({
  providedIn: "root"
})
export class AuthService {
 public auth0 = new auth0.WebAuth({
    clientID: environment.auth0.client_id,
    domain: environment.auth0.auth0domain,
    responseType: environment.auth0.responseType,
    audience: environment.auth0.audience,
    redirectUri: environment.auth0.callbackurl,
    scope: environment.auth0.scope,
  });

  constructor(private router: Router, private httpClient: HttpClient) { }

  public login(): void {
    this.auth0.authorize();

  }


  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(["/home"]);
      } else if (err) {
        this.router.navigate(["/home"]);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }
  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }
  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.auth0.logout({
      returnTo: environment.auth0.callbackurl,
      clientID: environment.auth0.client_id
    });
    // Go back to the home route
    // this.router.navigate(["/"]);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem("expires_at") || "{}");
    return new Date().getTime() < expiresAt;
  }

  getUserProfile() {
    const url = `https://${environment.auth0.customDomain}/userinfo`;
    return this.httpClient.get(url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
      })
    });
  }
}

