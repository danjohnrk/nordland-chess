import { MatchRegister } from "@/src/components/MatchRegister/MatchRegister";
import PageTemplate from "@/src/components/PageTemplate/PageTemplate";
import AuthContext from "@/stores/authContext";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useContext } from "react";

const NewMatch = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <PageTemplate title="Ny Match">
      <MatchRegister />
    </PageTemplate>
  );
};

export default NewMatch;
