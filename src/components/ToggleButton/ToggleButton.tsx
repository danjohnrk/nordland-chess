import { useState } from "react";
import styles from "./ToggleButton.module.css";

interface IProps {
  toggle: () => void;
}

const ToggleButton = (props: IProps) => {
  const { toggle } = props;

  return (
    <label className={styles.formSwitch}>
      <input type="checkbox" onChange={toggle} />
      <i></i>
    </label>
  );
};

export default ToggleButton;
