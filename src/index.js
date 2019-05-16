import React, { Component } from "react";
import ReactDOM from "react-dom";
import Buttons from "./Component/Buttons";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: " "
    };
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed = buttonPressed => {
    if (buttonPressed === "=") {
      this.setState({
        result: eval(this.state.result)
      });
    } else if (this.state.result === undefined) {
      this.setState({
        result: buttonPressed
      });
    } else if (buttonPressed === "all-clear") {
      this.setState({
        result: " "
      });
    } else {
      this.setState({
        result: this.state.result + buttonPressed
      });
    }
  };

  render() {
    return (
      <div>
        <Buttons
          buttonPressed={this.buttonPressed}
          valueInput={this.state.result === " " ? 0 : this.state.result}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
