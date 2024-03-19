import styles from "./TodoCardTitleDisplay.module.css";

interface Props {
  title: string;
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardTitleDisplay(props: Props) {
  return (
    <h1 className={styles.component} onClick={props.onClick}>
      {props.title}
    </h1>
  );
}
