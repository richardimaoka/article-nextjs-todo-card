import { TodoComment } from "@/app/api/types";
import styles from "./TodoCardCommentAuthor.module.css";
import { TodoCardProfilePicture } from "./TodoCardProfilePicture";
import { TodoCardTimestamp } from "./TodoCardTimestamp";

interface Props {
  comment: TodoComment;
}

export function TodoCardCommentAuthor(props: Props) {
  return (
    <div className={styles.component}>
      <TodoCardProfilePicture person={props.comment.author} />
      <TodoCardTimestamp createdAt={props.comment.createdAt}/>
    </div>
  );
}
