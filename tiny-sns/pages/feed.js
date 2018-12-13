import React from "react";
import Layout from "../components/Layout";
import db from "../common/firestore";
import { Link } from "./index";
import Head from "next/head";
import FeedItem from "../components/FeedItem";

class Feed extends React.Component {
  static async getInitialProps({ query }) {
    const uid = query.feedId;

    const doc = await db
      .collection("feeds-test")
      .doc(uid)
      .get();

    return { feedId: uid, feed: doc.data() };
  }
  render() {
    return (
      <Layout>
        <Head>
          <title>{this.props.feed.author.name}님의 피드</title>

          <meta
            property="og:title"
            content={this.props.feed.author.name + "님의 피드"}
          />
          <meta property="og:description" content={this.props.feed.content} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={"http://localhost/feed/" + this.props.feedId}
          />
          {this.props.feed.image && (
            <meta property="og:image" content={this.props.feed.image} />
          )}
        </Head>

        <FeedItem feed={this.props.feed} />
      </Layout>
    );
  }
}

export default Feed;
