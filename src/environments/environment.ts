// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    client_id: "T4T3wsZFW1zXj0cSSSJtOKG2bvToS3Pd",
    responseType: "token id_token",
    auth0domain: "tanver-custom.eu.auth0.com",
    customDomain: "login.tanverhasan.com",
    audience: "https://myapiserver.com",
    callbackurl: "http://localhost:4200/home",
    scope: "openid profile email ",
    auth0Tenant: "tanver-custom@eu"
  },
  firebase: {
    apiKey: "AIzaSyAumN8h9bsVpZxrK22aWnCtIaQaCh5qheo",
    authDomain: "blog-e494e.firebaseapp.com",
    databaseURL: "https://blog-e494e.firebaseio.com",
    projectId: "blog-e494e",
    storageBucket: "blog-e494e.appspot.com",
    messagingSenderId: "14464187627"
  },
  algolia: {
    appId: "5SFS694HN6",
    searchApiKey: "e20b7f39b4ac34e6fe725e25d4ef7f55"
  }
};


