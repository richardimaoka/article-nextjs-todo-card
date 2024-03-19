import styles from "./TodoCardTitleDisplay.module.css";

interface Props {
  title: string;
}

export function TodoCardTitleDisplay(props: Props) {
  return <h1 className={styles.component}>{props.title}</h1>;
}
