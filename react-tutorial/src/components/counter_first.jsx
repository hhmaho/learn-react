import React from "react";

class Counter_first extends React.Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200"
    tags: ["tag1", "tag2", "tag3"]
  };
// i: styles for span style={this.styles}
// i: inline styles: span style={{fontSize:30}}
  styles = {
    fontSize: 18,
    fontWeight: "bold"
  };

  render() {
    // let classes = "badge m-2 badge-";
    // classes += (this.state.count === 0)? "warning" : "primary"; i: to put in separate method Refactor ->extract in NewMethod (getBadgeClasses)

    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* other className: "badge badge-primary m-2" m-2 = margin 2*/}
        {/* <span className = "badge badge-warning m-2"> i: replace "badge badge-warning m-2" with {classes}*/}
        <span style={this.styles} className={this.getBadgeClasses()}>
      
          {/* {this.state.count} */}
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">
          Correct
        </button>
        <ul>
          {/* <li></li> i: map method */} 
          { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
        </ul>
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
