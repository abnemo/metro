import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

export const sendEmail = functions.https.onRequest((req: any, res: any) => {
  console.log(req);
  console.log(res);
});


export const fireStoreEmail = functions.firestore.document('users/{userId}').onCreate((event: any) => {

  const userId = event.params.userId;
  const db = admin.firestore();

  return db.collection('users').doc(userId).get().then(() => {

    const msg = {
      to: 'Thomas.handle@gmail.com',
      from: 'no-replyo@sfwinterbach.com',
      subject: 'Neuer Benutzer',

      // custom templates
      templateId: '758f452a-aa4d-4664-8088-5a5ce2a814ac',
      substitutionWrappers: ['{{', '}}'],
      substitutions: {
        name: 'Thomas',
        siteName: 'www.sfwinterbach.com'
      }
    };

    return sgMail.send(msg);
  })
    .then(() => console.log('email sent!'))
    .catch((err: any) => console.log(err));
});
