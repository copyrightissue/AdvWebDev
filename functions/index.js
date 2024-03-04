/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {randomUUID} = require("crypto");
// const functions = require("firebase-functions");

// const axios = require("axios");
// const params = {
//   access_key: process.env.WeatherStackKey,
//   query: "New York",
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyA7Ifgh_kQmOZla1QC4kObdLkQqcQk7v44",
//   authDomain: "test-12fa0.firebaseapp.com",
//   projectId: "test-12fa0",
//   storageBucket: "test-12fa0.appspot.com",
//   messagingSenderId: "344443641492",
//   appId: "1:344443641492:web:651c3b30fbc469d3ed5e81",
//   measurementId: "G-19XY9V4E8R",
// };
//
// const admin = require("firebase-admin");
// admin.initializeApp(firebaseConfig);
//
// const db = admin.firestore();
//
// const docRef = db.collection("Sites").doc("NewYork");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.pubsub = functions
//     .runWith({timeoutSeconds: 60, memory: "1GB"})
//     .pubsub
//     .schedule("every 1 hours")
//     .onRun(async (context) => {
//       await axios.get("http://api.weatherstack.com/current", {params})
//
//           .then((response) => {
//             const apiResponse = response.data;
//
//             // eslint-disable-next-line no-undef
//             docRef.set({
//
//               current: apiResponse,
//
//             });
//           }).catch((error) => {
//             console.log(error);
//           });
//       logger.info("running pubsub " + new Date().toISOString(),
//           {structuredData: true});
//       return null;
//     });


exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.flashBriefing = onRequest({
  timeoutSeconds: 15, cors: true, maxInstances: 10},
(request, response) => {
  logger.info("Flash Briefing requested!", {structuredData: true});
  response.set("Content-Type", "application/json").json(
      [
        {
          "uid": randomUUID(),
          "updateDate": new Date().toISOString(),
          "titleText": "What kind of test will I do today?",
          "mainText": "The quick brown fox jumped.",
          "streamUrl": null,
          "redirectionUrl": "https://example.com",
        },
      ],

  );
});
