const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
//
exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});
