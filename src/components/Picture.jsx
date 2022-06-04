import React from "react";
import PropType from "prop-types";
function Picture(props) {
  const { imageArr, pixelWidth } = props;
  const style = {
    display: "grid",
    gridTemplateRows: `repeat(${imageArr.length}, ${pixelWidth}px)`,
    gridTemplateColumns: `repeat(${imageArr[0].length}, ${pixelWidth}px)`,
    border: "1px solid black",
    aspectRatio: 1,
  };

  return (
    <div style={{ display: "inline-block", aspectRatio: 1 }}>
      <div className="picture" style={style}>
        {imageArr.map((row, i) => (
          <div key={i} className="picture__row">
            {row.map((cell, j) => (
              <div
                key={j}
                className="picture__cell"
                style={{
                  backgroundColor: cell ? "black" : `rgba(${255}, 255, 255)`,
                  width: pixelWidth,
                  height: pixelWidth,
                }}
              >
                {" "}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

Picture.propTypes = {
  imageArr: PropType.arrayOf(PropType.arrayOf(PropType.number)),
  pixelWidth: PropType.number,
};

export default Picture;
