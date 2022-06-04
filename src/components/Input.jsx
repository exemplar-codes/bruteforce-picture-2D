import React from "react";
import PropType from "prop-types";

import { isRectangularArrayOfColors } from "../utils";
import { useRef, useState } from "react";

function Input(props) {
  const pxWidthRef = useRef();
  const imageArrRef = useRef();

  const [gibberishEntered, setGibberishEntered] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const pxWidth = Number(pxWidthRef.current.value.trim());
    try {
      const imageArr = eval(imageArrRef.current.value);
      if (!imageArr || isRectangularArrayOfColors(imageArr))
        // empty input is OK
        props.setImageArr(imageArr);
      else throw "Not an array";
    } catch (e) {
      setGibberishEntered(true);
      return;
    }
    if (typeof pxWidth === "number") {
      props.setPixelWidth(pxWidth);
    }
    if (gibberishEntered) setGibberishEntered(false);
  };

  return (
    <>
      {gibberishEntered && (
        <h4 style={{ color: "red" }}>Warning: 'Bad Input'</h4>
      )}
      <form onSubmit={onSubmitHandler}>
        <label name="px-width">Pixel width (default 10){": "}</label>
        <input
          type="number"
          min="1"
          name="px-width"
          defaultValue={10}
          ref={pxWidthRef}
        />
        <br />
        <label>
          Enter picture grid as 2D array (default chess board){": "}
        </label>
        <input type="text" name="image-arr" ref={imageArrRef} />
        <br />
        <br />
        <input type="reset" id="name" />
        &nbsp;
        <input type="submit" />
      </form>
    </>
  );
}

Input.propTypes = {
  setPixelWidth: PropType.func,
  setImageArr: PropType.func,
};
export default Input;
