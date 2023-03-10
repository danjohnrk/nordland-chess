import { Chessboard } from "@/src/components/Chessboard/Chessboard";
import { DisplayScreen } from "@/src/components/DisplayScreen/DisplayScreen";
import AuthContext from "@/stores/authContext";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";

const Display = () => {
  return <DisplayScreen />;
};

export default Display;
