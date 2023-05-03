import Image from "next/image";
import Link from "next/link";
import styles from "./PageButton.module.css";

type TButtonTypes =
  | "profile"
  | "match-list"
  | "user-list"
  | "chess-board"
  | "display";

interface IButtonContent {
  title: string;
  pageUrl: string;
  iconUrl: string;
}

type TButtons = {
  [key in TButtonTypes]: IButtonContent;
};

interface IProps {
  type: TButtonTypes;
}

const PageButton = (props: IProps) => {
  const { type } = props;

  const buttonContent: TButtons = {
    profile: {
      title: "Profil",
      pageUrl: "/delete-user",
      iconUrl: "/user-solid.svg",
    },
    "match-list": {
      title: "Spilte partier",
      pageUrl: "/match-list",
      iconUrl: "/trophy-solid.svg",
    },
    "user-list": {
      title: "Ranking",
      pageUrl: "/user-list",
      iconUrl: "/ranking-star-solid.svg",
    },
    "chess-board": {
      title: "Sjakkbrett",
      pageUrl: "/chessboard",
      iconUrl: "/chess-board-solid.svg",
    },
    display: {
      title: "Visning",
      pageUrl: "/display",
      iconUrl: "/tv-solid.svg",
    },
  };

  const currentButtonContent = buttonContent[type];

  return (
    <Link href={currentButtonContent.pageUrl} className={styles.pageButton}>
      <div className={styles.pageButtonText}>
        <Image
          src={currentButtonContent.iconUrl}
          alt={"test"}
          width={30}
          height={30}
        />
        <span>{currentButtonContent.title}</span>
      </div>
      <Image
        src={"/chevron-right-solid.svg"}
        alt={"Arrow right"}
        width={16}
        height={16}
      />
    </Link>
  );
};

export default PageButton;
