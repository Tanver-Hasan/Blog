"use strict";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const env = functions.config();
const algoliasearch = require("algoliasearch");
// Initialize the Algolia Client
const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('posts');
exports.indexPost = functions.firestore
    .document('posts/{postId}')
    .onCreate((snap, context) => {
    const data = snap.data();
    const objectID = snap.id;
    // Add the data to the algolia index
    return index.addObject(Object.assign({ objectID }, data));
});
exports.unindexPost = functions.firestore
    .document('zoo/{animalId}')
    .onDelete((snap, context) => {
    const objectId = snap.id;
    // Delete an ID from the index
    return index.deleteObject(objectId);
});
//# sourceMappingURL=index.js.map