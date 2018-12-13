import firebase from "./firebase";

const db = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);

export default db;
