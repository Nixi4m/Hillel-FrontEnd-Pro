import React from "react";
import styles from "./Input.module.css";
import cx from "classnames";

const Input = ({ type, value, onChange, placeholder }) => {
  const className = cx(styles.input, "form__input");

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={className}
    />
  );
};

export default Input;
