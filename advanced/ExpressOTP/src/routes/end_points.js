const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const twilio = require('../twilio/twilio');

router.post('/otp', (req, res) => {
    if(!req.body.phone){
        return res.status(422).send({error: 'You must provide a phone number'});
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    const newphone = String(phone).replace(0, '+27');

    admin.auth().getUser(newphone)
    .then(user => {
        const code = Math.floor(Math.random() * 8999 + 1000);

        twilio.messages.create({
            to: newphone,
            from: '+17313454894',
            body: `Your code is: ${code}`
        }, (err) => {
            if(err){ return res.status(422).send(err)}
        
            admin.database().ref(`users/${newphone}`)
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
        const newphone = String(phone).replace(0, '+27');

        admin.auth().createUser({ uid: newphone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({error: err}))
});

router.post('/verify', (req, res) => {
    if(!req.body.phone || !req.body.code){
        return res.status(422).send({error: 'Phone and code must be provided'});
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    const newphone = String(phone).replace(0, '+27');
    
    const code = parseInt(req.body.code);

    const ref = admin.database().ref(`users/${newphone}`);

    admin.auth().getUser(newphone)
    .then(() => {
        ref.on('value', snapshot => {
            ref.off();
            const user = snapshot.val();
            
            if(user.code !== code || !user.codeValid){
                return res.status(422).send({error: 'Code not valid'});
            }

            ref.update({codeValid: false});
            admin.auth().createCustomToken(newphone)
            .then(token => res.send({token}));

        });
    })
    .catch(err => res.send(422).send({error: err}))

});
module.exports = router;