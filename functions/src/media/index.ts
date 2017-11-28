import * as functions from 'firebase-functions';

export const updateMedia = functions.database.ref('/media-items/{imageId}').onCreate(event => {
  console.log(event);
});
