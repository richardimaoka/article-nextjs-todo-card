import styles from "./TodoCardDescriptionDisplay.module.css";

interface Props {
  description: string;
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardDescriptionDisplay(props: Props) {
  return (
    <div className={styles.component} onClick={props.onClick}>
      {props.description}
    </div>
  );
}
