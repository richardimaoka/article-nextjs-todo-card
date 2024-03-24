import styles from "./TodoCardTitleDisplay.module.css";

interface Props {
  title: string;
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardTitleDisplay(props: Props) {
  const isEmpty = props.title === "";

  const className = isEmpty
    ? `${styles.component} ${styles.empty}`
    : styles.component;

  return (
    <h1 className={className} onClick={props.onClick}>
      {isEmpty ? "(Please click here and enter a title)" : props.title}
    </h1>
  );
}
