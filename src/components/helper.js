const rgbValue = () => {
  return Math.floor(Math.random() * 256);
};

// Method generates an array of rgb colors
const generateColors = (row, col) => {
  let colors = [];
  for (let i = 0; i < row; i++) {
    let color = [];
    for (let j = 0; j < col; j++) {
      color.push(`rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`);
    }
    colors.push(color);
  }
  // console.log(colors)
  return colors;
};

export { rgbValue, generateColors };
