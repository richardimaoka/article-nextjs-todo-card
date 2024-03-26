import Image from "next/image";
import styles from "./TodoCardProfilePicture.module.css";

interface Props {}

export function TodoCardProfilePicture(props: Props) {
  return (
    <Image
      className={styles.component}
      src="/images/richard.jpg"
      width={24}
      height={24}
      alt={"profile picture"}
    />
  );
}
