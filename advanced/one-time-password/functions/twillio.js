const twilio = require('twilio');

const SID = 'ACcde59fdbc22e24c286e3544395642e2e';
const token = '338c7866f73949cf21a2852826fc1516';

module.exports = new twilio.Twilio(SID, token);