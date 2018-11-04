import React from "react";

class Counter_Tags extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags! </p>
    // or return null
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
  }

  render() {

    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}
