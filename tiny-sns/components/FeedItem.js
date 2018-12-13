import React from "react";

class FeedItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.feed.image && (
            <div>
              <img
                src={this.props.feed.image}
                alt=""
                style={{ maxHeight: "140px" }}
              />
            </div>
          )}
          {this.props.feed.content}
        </div>
        <div>
          <a href={this.props.feed.author.photo} target={"_blank"}>
            <img
              src={this.props.feed.author.photo}
              alt={this.props.feed.author.name}
              style={{
                width: "1em",
                height: "1em",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "0.5em",
              }}
            />
          </a>
          {this.props.feed.author.name}
        </div>
      </React.Fragment>
    );
  }
}

export default FeedItem;
