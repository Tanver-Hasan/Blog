export const environment = {
  production: true,
  auth0: {
    client_id: "T4T3wsZFW1zXj0cSSSJtOKG2bvToS3Pd",
    responseType: "token id_token",
    auth0domain: "tanver-custom.eu.auth0.com",
    customDomain: "login.tanverhasan.com",
    audience: "https://myapiserver.com",
    callbackurl: "https://tanverhasan.com/home",
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
  }
};
