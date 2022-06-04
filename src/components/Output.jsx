import React from "react";
import PropType from "prop-types";
import Picture from "./Picture";

import { defaultPicture } from "../utils";

function Output(props) {
  return <Picture {...props} />;
}

Output.propTypes = {
  imageArr: PropType.array,
  pixelWidth: PropType.number,
};

Output.defaultProps = {
  imageArr: defaultPicture(40),
  pixelWidth: 10,
};

export default Output;
