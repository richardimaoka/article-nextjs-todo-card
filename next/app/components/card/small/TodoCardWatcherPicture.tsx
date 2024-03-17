import Image from "next/image";
import styles from "./TodoCardWatcherPicture.module.css";

interface Props {}

export function TodoCardWatcherPicture(props: Props) {
  return (
    <Image
      className={styles.component}
      src="/images/richard.jpg"
      width={40}
      height={40}
      alt={"profile picture"}
    />
  );
}
