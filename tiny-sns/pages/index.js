import React from "react";
import Layout from "../components/Layout";
import { observer } from "mobx-react";
import store from "../common/store";
import { observable } from "mobx";
import uuid from "uuid/v4";
import firebase from "../common/firebase";
import db from "../common/firestore";
//import Link from 'next/link';
import { Link } from "../routes";
import FeedItem from "../components/FeedItem";

class Data {
  @observable uploadedUrl = null;
  @observable feeds = [];
}

@observer
class Index extends React.Component {
  data = new Data();

  static async getInitialProps() {
    const results = await db
      .collection("feeds-test")
      .orderBy("updated_at", "desc")
      .get();

    const feeds = [];
    results.forEach(doc => {
      const data = doc.data();
      data.id = doc.id;
      feeds.push(data);
    });

    return { feeds };
  }

  constructor(props) {
    super(props);

    this.data.feeds = props.feeds;

    db.collection("feeds-test")
      .orderBy("updated_at", "desc")
      .onSnapshot(results => {
        this.data.feeds = [];
        results.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;
          this.data.feeds.push(data);
        });
      });
  }

  login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
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
        };
      })
      .catch(error => {
        console.log(error);
        alert("로그인 실패: " + error.message);
      });
  };
  write = () => {
    const content = this.textarea.value;

    const now = new Date();
    const requestData = {
      content,
      author: {
        uid: store.user.uid,
        name: store.user.name,
        photo: store.user.avatar,
      },
      created_at: now,
      updated_at: now,
    };

    if (this.data.uploadedUrl) {
      requestData.image = this.data.uploadedUrl;
    }

    const uid = uuid();
    db.collection("feeds-test")
      .doc(uid)
      .set(requestData)
      .then(response => {
        this.data.uploadedUrl = null;
        this.textarea.value = "";
      })
      .catch(error => {
        console.log(error);
        alert("작성 실패: " + error.message);
      });
  };

  onFileSelect = event => {
    const file = event.target.files[0];
    const metadata = {
      contentType: file.type,
    };

    const ref = firebase.storage().ref();

    ref
      .child(
        "images/" +
          store.user.uid +
          "/" +
          new Date().toString() +
          "_" +
          file.name,
      )
      .put(file, metadata)
      .then(snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
          this.data.uploadedUrl = url;
        });
      })
      .catch(error => {
        console.log(error);
        alert("Error: " + error.message);
      });
  };

  render() {
    return (
      <Layout>
        {store.user === null && (
          <button className="btn btn-primary" onClick={this.login}>
            로그인
          </button>
        )}
        {store.user !== null && (
          <div>
            {this.data.uploadedUrl && (
              <div className={"mb-2"}>
                <img
                  src={this.data.uploadedUrl}
                  alt=""
                  style={{ maxHeight: "200px" }}
                />
              </div>
            )}
            <div className={"mb-2"}>
              <input type="file" onChange={this.onFileSelect} />
            </div>
            <textarea
              ref={ref => (this.textarea = ref)}
              rows="2"
              className="form-control mb-2"
            />
            <button className="btn btn-primary" onClick={this.write}>
              전송
            </button>
          </div>
        )}

        <ul className="mt-4">
          {this.data.feeds.map((feed, n) => (
            <li key={n.toString() + new Date().toString()}>
              <FeedItem feed={feed} />
              <div>
                <Link route={"/feed/" + feed.id}>
                  <a>자세히 보기</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default Index;
