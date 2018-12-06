import React from 'react';
import Layout from "../components/Layout";
import {observer} from "mobx-react";
import * as firebase from 'firebase';
import store from '../common/store';
import {observable} from "mobx";
import uuid from 'uuid/v4';

class Data {
    @observable feeds = [];
}

@observer
class Index extends React.Component {
    data = new Data();

    static async getInitialProps() {
        const db = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true};
        db.settings(settings);
        const results = await db.collection( 'feeds-test' )
            .orderBy( 'updated_at', 'desc' )
            .get();

        const feeds = [];
        results.forEach( doc => {
            feeds.push( doc.data() );
        } );

        return { feeds };
    }

    constructor( props ) {
        super( props );

        this.data.feeds = props.feeds;

        const db = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true};
        db.settings(settings);
        db.collection('feeds-test')
            .orderBy('updated_at', 'desc')
            .onSnapshot(results => {
                this.data.feeds = [];
                results.forEach(doc => {
                    this.data.feeds.push(doc.data());
                    console.log(doc.data());
                });
            });
    }

    login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(response => {
                const token = response.credential.accessToken;
                const uid = response.user.uid;
                const name = response.user.displayName;
                const email = response.user.email;
                const avatar = response.user.photoURL;

                store.user = {
                    token,
                    uid,
                    name,
                    email,
                    avatar,
                }
            })
            .catch(error => {
                console.log(error);
                alert('로그인 실패: ' + error.message);
            });
    };
    write = () => {
        const content = this.textarea.value;

        const db = firebase.firestore();
        const settings = {/* your settings... */ timestampsInSnapshots: true};
        db.settings(settings);
        const uid = uuid();
        db.collection('feeds-test').doc(uid)
            .set({
                content,
                author: {
                    uid: store.user.uid,
                    name: store.user.name,
                    photo: store.user.avatar,
                },
                created_at: new Date(),
                updated_at: new Date(),
            })
            .then(response => {
                this.textarea.value = '';
            })
            .catch(error => {
                console.log(error);
                alert('작성 실패: ' + error.message);
            });
    };

    render() {
        return (
            <Layout>
                {store.user === null &&
                <button className="btn btn-primary" onClick={this.login}>
                    로그인
                </button>
                }
                {store.user !== null &&
                <div>
                    <textarea ref={ref => this.textarea = ref} rows="2" className="form-control mb-2"/>
                    <button className="btn btn-primary" onClick={this.write}>전송</button>
                </div>
                }

                <ul className="mt-4">
                    {this.data.feeds.map((feed, n) => (
                        <li key={n.toString() + new Date().toString()}>
                            <div>{feed.content}</div>
                            <div>
                                <img src={feed.author.photo} alt={feed.author.name}
                                     style={{
                                         width: '1em',
                                         height: '1em',
                                         borderRadius: '50%',
                                         display: 'inline-block',
                                         marginRight: '0.5em'
                                     }}/>
                                {feed.author.name}
                            </div>
                        </li>
                    ))}
                </ul>
            </Layout>
        );
    }
}

export default Index;