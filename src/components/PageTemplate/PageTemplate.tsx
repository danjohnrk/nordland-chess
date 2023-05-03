import Image from "next/image";
import Link from "next/link";
import { Children, ReactNode } from "react";
import styles from "./PageTemplate.module.css";

interface IProps {
  title: string;
  children: ReactNode;
}

const PageTemplate = (props: IProps) => {
  const { title, children: content } = props;
  return (
    <>
      <div className={styles.header}>
        <Link href="/" className={styles.headerLink}>
          <Image
            className={styles.headerLinkIcon}
            src={"/chevron-left-solid.svg"}
            alt={"Arrow left"}
            width={16}
            height={16}
          />
          Tilbake
        </Link>
        <h2 className={styles.headerTitle}>{title}</h2>
        <span className={styles.placeHolder}></span>
      </div>
      <main className={styles.content}>{content}</main>
    </>
  );
};

export default PageTemplate;
