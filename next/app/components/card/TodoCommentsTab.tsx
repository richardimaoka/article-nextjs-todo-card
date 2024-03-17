import styles from "./TodoCommentsTab.module.css";

interface Props {
  selected?: boolean;
}

export function TodoCommentsTab(props: Props) {
  const className = props.selected
    ? styles.component
    : styles.component + " " + styles.selected;

  return <div className={className}>Comments</div>;
}
