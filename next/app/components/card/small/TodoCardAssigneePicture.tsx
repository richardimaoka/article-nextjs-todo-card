import Image from "next/image";
import styles from "./TodoCardAssigneePicture.module.css";

interface Props {}

export function TodoCardAssigneePicture(props: Props) {
  return (
    <Image
      className={styles.component}
      src={"/images/richard.jpg"}
      alt={"Assignee picture"}
      width={40}
      height={40}
    />
  );
}
