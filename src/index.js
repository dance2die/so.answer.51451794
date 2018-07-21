import React, { Component } from "react";
import ReactDOM from "react-dom";

const Child = () => <div>I am a Child component</div>;

class Parent extends Component {
  state = {
    checked: false
  };

  onClick = e => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onClick={this.onClick.bind(this)}
          />
          <span>Checkbox</span>
        </label>
        {this.state.checked ? <Child /> : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);
