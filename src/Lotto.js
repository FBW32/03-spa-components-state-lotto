import React, { Component } from "react";
import "./Style.css";
import Box from "./Box";
class Lotto extends Component {
  state = {
    nums: [],
  };

  generateUniqNumbers = () => {
    let arr = [];
    let number;
    for (let i = 0; i < 7; i++) {
      if (i === 6) {
        number = Math.ceil(Math.random() * 10);
      } else {
        number = Math.ceil(Math.random() * 49);
        while (arr.includes(number)) {
          number = Math.ceil(Math.random() * 49);
        }
      }

      arr.push(number);
    }
    this.setState({ nums: arr });
  };
  resetPage = () => {
    window.location.reload();
  };
  render() {
    return (
      <div>
        {this.state.nums.map((num) => (
          <Box num={num} />
        ))}

        <button className="btn" onClick={this.resetPage}>
          Reset
        </button>
        <button className="btn" onClick={this.generateUniqNumbers}>
          Show me Lucky numbers
        </button>
      </div>
    );
  }
}

export default Lotto;
