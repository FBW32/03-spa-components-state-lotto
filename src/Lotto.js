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
        number = Math.floor(Math.random() * 10);
      } else {
        number = Math.floor(Math.random() * 50);
        while (arr.includes(number)) {
          number = Math.floor(Math.random() * 50);
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
