import styles from "./TodoCardCommentBodyDisplay.module.css";

interface Props {
  commentBody: string;
  // optional args, so that you can check component's design alone
  onClick?: () => void;
}

export function TodoCardCommentBodyDisplay(props: Props) {
  return (
    <div className={styles.component} onClick={props.onClick}>
      {props.commentBody}
    </div>
  );
}
