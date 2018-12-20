import React from 'react';
import db from '../common/firestore';
import FeedItem from '../components/FeedItem';
import { observer } from 'mobx-react';
import { decorate, observable } from 'mobx';

class Data {
  feedId = null;
  feed = {};
}

decorate(Data, {
  feedId: observable,
  feed: observable,
});

class Feed extends React.Component {
  data = new Data();

  componentDidMount() {
    const uid = this.props.match.params.id;
    db.collection('feeds-test')
      .doc(uid)
      .get()
      .then(doc => {
        this.data.feed = doc.data();
        this.data.feedId = uid;
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            {this.data.feedId && <FeedItem feed={this.data.feed} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Feed = observer(Feed);

export default Feed;
