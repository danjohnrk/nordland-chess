import { ReactNode, useState } from "react";
import styles from "./ExpandableList.module.css";

interface IProps {
  children: ReactNode;
  buttonTitle: string;
}

const ExpandableList = (props: IProps) => {
  const { children: list } = props;
  const [expanded, setExpanded] = useState(false);
  console.log(list);
  return (
    <div>
      <button></button>
      {expanded === true && list}
    </div>
  );
};

export default ExpandableList;
