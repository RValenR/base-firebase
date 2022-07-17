// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
        //Aqui configuracion proporcionada por firebase
    apiKey: "AIzaSyAEKGXsbfw-FKUSKDhsnMv8KYjX3Vav91c",
    authDomain: "base-firebase-9cf02.firebaseapp.com",
    projectId: "base-firebase-9cf02",
    storageBucket: "base-firebase-9cf02.appspot.com",
    messagingSenderId: "1002883772880",
    appId: "1:1002883772880:web:a7c1616cb9a3ed5ff889d5",
    measurementId: "G-0ZQ9DDF3N7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
