const util = require('util');
const gc = require('../config/');
const bucket = gc.bucket('qrty-images'); // should be your bucket name
const { v4: uuidv4 } = require('uuid');

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = (file) => new Promise((resolve, reject) => {
    const { originalname, buffer } = file;

    let filename = uuidv4() + originalname.substring(originalname.indexOf('.'));

    const blob = bucket.file(filename);
    const blobStream = blob.createWriteStream({
        resumable: false
    })
    blobStream.on('finish', () => {
        const publicUrl = 'https://storage.googleapis.com/' + bucket.name + '/' + blob.name;
        resolve(publicUrl)
    })
        .on('error', (e) => {
            console.log(e);
            reject(`Unable to upload image, something went wrong`)
        })
        .end(buffer)
})

module.exports = uploadImage;
