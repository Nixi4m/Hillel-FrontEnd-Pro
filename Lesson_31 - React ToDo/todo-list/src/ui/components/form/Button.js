import React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

const Button = ({ text, customClass, onClick }) => {
  const className = cx(styles.button, "form__btn", { [customClass]: customClass });

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
