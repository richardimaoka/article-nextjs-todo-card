import styles from "./TodoCardTitleInput.module.css";

interface Props {
  title: string;
}

export function TodoCardTitleInput(props: Props) {
  return (
    <input
      className={styles.component}
      name="title"
      value={props.title}
      autoFocus
    />
  );
}
