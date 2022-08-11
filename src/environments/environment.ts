// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movieApiBase: 'https://www.omdbapi.com/?apikey=540d1872',
  firebase: {
    apiKey: "AIzaSyCDiaLYsdT92m9ldPrRDVN7aLibpQh9uho",
  authDomain: "commschoolproject.firebaseapp.com",
  projectId: "commschoolproject",
  storageBucket: "commschoolproject.appspot.com",
  messagingSenderId: "503260698826",
  appId: "1:503260698826:web:dc78572606a1e6db61fc33"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
