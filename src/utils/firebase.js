const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("../path/to/key_service_account.json.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://console.firebase.google.com/u/0/project/telegram-bot-efda6/firestore/data/~2FclinicalCase~2F1hsmkGQx5sdibpsddxls?hl=es-419"
})

const db = getFirestore();
module.exports = db;
