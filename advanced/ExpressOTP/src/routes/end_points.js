const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const twilio = require('../twilio/twilio');

router.post('/otp', (req, res) => {
    if(!req.body.phone){
        return res.status(422).send({error: 'You must provide a phone number'});
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');

    admin.auth().getUser(phone)
    .then(user => {
        const code = Math.floor(Math.random() * 8999 + 1000);

        twilio.messages.create({
            to: phone,
            from: '+17313454894',
            body: `Your code is: ${code}`
        }, (err) => {
            if(err){ return res.status(422).send(err)}
        
            admin.database().ref(`users/${phone}`)
            .update({code, codeValid: true}, () => {
                res.send({success: true});
            });
        })
    })
    .catch(err => {
        res.status(422).send({error: err});
    });
});

router.post('/user', (req, res) => {
    if(!req.body.phone){
            return res.status(422).send({error: 'Bad Input'});
        }

        const phone = String(req.body.phone).replace(/[^\d]/g, '');

        admin.auth().createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({error: err}))
});

module.exports = router;