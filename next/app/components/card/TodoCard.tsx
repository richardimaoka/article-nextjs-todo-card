import styles from "./TodoCard.module.css";

interface Props {}

export function TodoCard(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.pogress}>in progress due date12 24</div>

        <div className={styles.description}>description</div>

        <div className={styles.comments}>comements</div>
      </div>

      <div className={styles.right}>right</div>
    </div>
  );
}
