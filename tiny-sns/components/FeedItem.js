import React from 'react';
import { Link } from "../routes";

class FeedItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            {this.props.feed.image && (
              <div>
                <img
                  src={this.props.feed.image}
                  alt=""
                  style={{ maxHeight: '140px' }}
                />
              </div>
            )}
            {this.props.feed.content}

            {!!this.props.useViewButton && (
              <div className="mt-2">
                <Link route={'/feed/' + this.props.feed.id}>
                  <a>자세히 보기</a>
                </Link>
              </div>
            )}
          </div>
          <div className="card-footer">
            <a href={this.props.feed.author.photo} target={'_blank'}>
              <img
                src={this.props.feed.author.photo}
                alt={this.props.feed.author.name}
                style={{
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '0.5em',
                }}
              />
            </a>
            {this.props.feed.author.name}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FeedItem;
