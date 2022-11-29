import React from "react";
import { defaultProps, InputPropTypes } from "./types";

const TextInput = (props: InputPropTypes): JSX.Element => {
  return (
    <div className="void-input-wrapper">
      {props.label && (
        <p>
          <label htmlFor={props.name}>{props.label}</label>
        </p>
      )}
      <div>
        <input {...defaultProps(props)} type="text" />
      </div>
    </div>
  );
};

export default TextInput;
