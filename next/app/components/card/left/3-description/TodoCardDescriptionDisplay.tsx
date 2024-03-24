import styles from "./TodoCardDescriptionDisplay.module.css";

interface Props {
  description: string;
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardDescriptionDisplay(props: Props) {
  const isEmpty = props.description === "";

  const className = isEmpty
    ? `${styles.component} ${styles.empty}`
    : styles.component;

  return (
    <pre className={className} onClick={props.onClick}>
      {isEmpty
        ? "(Please click here and enter a description)"
        : props.description}
    </pre>
  );
}
