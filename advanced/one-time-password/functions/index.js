const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./serviceAccount.json');
const requestOTP = require('./request_otp');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-1d11b.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOTP = functions.https.onRequest(requestOTP);