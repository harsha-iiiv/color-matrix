import React, { Component } from "react";
import "./BoxContainer.css";
import Box from "./Box";
import { rgbValue, generateColors } from "./helper";

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Color state contains 2D array of rgb color values
      colors: generateColors(7, 14),
    };
  }

  changeNeighbors = (colors, rgb, newColor) => {
    let row = null;
    let col = null;

    console.log(colors, rgb);
    for (let i = 0; i < colors.length; i++) {
      if (colors[i].indexOf(rgb) > -1) {
        row = i;
        col = colors[i].indexOf(rgb);
      }
    }
    let up = { row: row - 1, col };
    let down = { row: row + 1, col };
    let left = { row, col: col - 1 };
    let right = { row, col: col + 1 };
    // console.log(row, col)
    // console.log(up, down, left, right)

    //change color of neighbors considering the boundary conditions
    if ((up.row > -1) & (up.col > -1) & (up.row < 7) & (up.col < 14))
      colors[up.row][up.col] = `rgb(${rgbValue()},${rgbValue()},${rgbValue()})`;
    if ((down.row > -1) & (down.col > -1) & (down.row < 7) & (down.col < 14))
      colors[down.row][
        down.col
      ] = `rgb(${rgbValue()},${rgbValue()},${rgbValue()})`;
    if ((left.row > -1) & (left.col > -1) & (left.row < 7) & (left.col < 14))
      colors[left.row][
        left.col
      ] = `rgb(${rgbValue()},${rgbValue()},${rgbValue()})`;
    if (
      (right.row > -1) &
      (right.col > -1) &
      (right.row < 7) &
      (right.col < 14)
    )
      colors[right.row][
        right.col
      ] = `rgb(${rgbValue()},${rgbValue()},${rgbValue()})`;

    return colors.map((color) => {
      return color.map((ele) => {
        if (ele !== rgb) return ele;
        return newColor;
      });
    });
  };

  changeColor = (c) => {
    //create a new RGB color
    let newColor;
    do {
      newColor = `rgb(
        ${rgbValue()},
        ${rgbValue()},
        ${rgbValue()}
      )`;

      // If new rgb color is equal to previous color, generate new rgb color
    } while (newColor === c);

    // Change colors array state by inserting new color
    this.setState((st) => ({
      colors: this.changeNeighbors(st.colors, c, newColor),
    }));
  };

  render() {
    return (
      <div className="BoxContainer">
        {this.state.colors.map((color) =>
          // For each color make a box component
          color.map((ele) => <Box color={ele} changeColor={this.changeColor} />)
        )}
      </div>
    );
  }
}

export default BoxContainer;
