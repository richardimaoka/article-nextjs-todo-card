import styles from "./TodoCardAssigneeName.module.css";

interface Props {
  name: string;
}

export function TodoCardAssigneeName(props: Props) {
  return <div className={styles.component}>{props.name}</div>;
}
