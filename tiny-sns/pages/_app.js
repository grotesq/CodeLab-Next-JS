import React from 'react';
import App from 'next/app';
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase';

export default class CustomApp extends App {
    constructor() {
        super();

        try {
            firebase.initializeApp( firebaseConfig );
        }
        catch( error ) {
            console.log( 'firebase already initialized' );
        }
    }
}