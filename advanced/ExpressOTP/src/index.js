const express = require('express');
const App = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

App.use(bodyParser.json());
App.use(cors());

App.use('/api', require('./routes/end_points'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-1d11b.firebaseio.com"
});

App.listen(6063);