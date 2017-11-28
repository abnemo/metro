import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
let production = admin.initializeApp(functions.config().firebase, 'production');

import * as email from './email';
import * as media from './media';

/// Export functions you want deployed
export const sendEmail = email.sendEmail;
export const firestoreEmail = email.fireStoreEmail;

export const updateMedia = media.updateMedia;
