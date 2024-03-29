import React from "react";

import { InputPropTypes, InputTypeTypes } from "./types";

import PasswordInput from "./password";
import TextInput from "./text";
import SelectInput from "./select";

// DateInput;
const Input: React.FC<InputPropTypes> & InputTypeTypes = (
  props
): JSX.Element => <TextInput {...props} />;

Input.Password = PasswordInput;
Input.Select = SelectInput;
Input.Text = TextInput;

export default Input;
