import { TodoComment } from "@/app/api/types";
import styles from "./TodoCardComment.module.css";
import { TodoCardCommentAuthor } from "./TodoCardCommentAuthor";
import { TodoCardCommentBodyDisplay } from "./TodoCardCommentBodyDisplay";
import { TodoCardCommentBody } from "./TodoCardCommentBody";

interface Props {
  comment?: TodoComment;
}

export function TodoCardComment(props: Props) {
  const comment: TodoComment = {
    id: "asb",
    body: `Embarking on a shopping mission for tomorrow's breakfast is a delightful adventure filled with anticipation for a delicious morning meal. The primary items on the shopping list are eggs, milk, and bread, forming the foundation for a hearty and satisfying breakfast`,
    author: {
      id: "rid",
      name: "richardimaoka",
      imagePath: "/images/richard.jpg",
    },
    createdAt: new Date(),
  };
  return (
    <div className={styles.component}>
      <TodoCardCommentAuthor />
      <TodoCardCommentBody comment={comment} />
    </div>
  );
}
