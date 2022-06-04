import React from "react";
import PropTypes from "prop-types";

function Picture({ imageArr = [[1, 1]] }) {
  return (
    <div className="picture">
      {imageArr.map((row, i) => (
        <div key={i} className="picture__row">
          {row.map((cell, j) => (
            <div key={j} className="picture__cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

Picture.propTypes = {
  imageArr: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default Picture;
