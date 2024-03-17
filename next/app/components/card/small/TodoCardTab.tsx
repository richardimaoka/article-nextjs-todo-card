import styles from "./TodoCardTab.module.css";

export type TabTypes = "Comments" | "Activities" | "Files";

interface Props {
  tabName: TabTypes;
  selected?: boolean;
}

export function TodoCardTab(props: Props) {
  const className = props.selected
    ? styles.component + " " + styles.selected
    : styles.component;

  return <div className={className}>{props.tabName}</div>;
}
