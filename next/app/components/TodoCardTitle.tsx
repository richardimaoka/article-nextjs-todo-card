import styles from "./TodoCardTitle.module.css";

interface Props {
  title: string;
}

export function TodoCardTitle(props: Props) {
  return <h1 className={styles.component}>{props.title}</h1>;
}
