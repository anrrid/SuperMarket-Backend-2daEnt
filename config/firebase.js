const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("../../FirebaseKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
const admin = require("../db/ecommerce-10e65-firebase-adminsdk-a4avb-9feb90d884.json");

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
