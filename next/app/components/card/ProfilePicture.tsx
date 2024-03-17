import Image from "next/image";
import styles from "./ProfilePicture.module.css";

interface Props {}

export function ProfilePicture(props: Props) {
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
