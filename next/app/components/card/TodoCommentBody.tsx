import styles from "./TodoCommentBody.module.css";

interface Props {}

export function TodoCommentBody(props: Props) {
  const text = `Embarking on a shopping mission for tomorrow's breakfast is a delightful
      adventure filled with anticipation for a delicious morning meal. The
      primary items on the shopping list are eggs, milk, and bread, forming the
      foundation for a hearty and satisfying breakfast.`;

  return <div className={styles.component}>{text}</div>;
}
