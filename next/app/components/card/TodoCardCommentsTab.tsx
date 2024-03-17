import styles from "./TodoCardCommentsTab.module.css";

interface Props {
  selected?: boolean;
}

export function TodoCardCommentsTab(props: Props) {
  const className = props.selected
    ? styles.component
    : styles.component + " " + styles.selected;

  return <div className={className}>Comments</div>;
}
