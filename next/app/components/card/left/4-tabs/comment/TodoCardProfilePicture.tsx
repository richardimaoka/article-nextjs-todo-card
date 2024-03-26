import Image from "next/image";
import styles from "./TodoCardProfilePicture.module.css";
import { TodoPerson } from "@/app/api/types";

interface Props {
  person: TodoPerson;
}

export function TodoCardProfilePicture(props: Props) {
  return (
    <Image
      className={styles.component}
      src={props.person.imagePath}
      width={24}
      height={24}
      alt={"profile picture"}
    />
  );
}
