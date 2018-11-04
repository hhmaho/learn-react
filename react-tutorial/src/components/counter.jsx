import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
    // imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button class Name="btn btn-secondary btn-sm">
          Correct
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "start" : count;
  }
}

export default Counter;
