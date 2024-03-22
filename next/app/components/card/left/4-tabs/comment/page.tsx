import { TodoComment, TodoItem } from "@/app/api/types";
import styles from "./page.module.css";
import { TodoCardComment } from "./TodoCardComment";
import { TodoCardCommentBody } from "./TodoCardCommentBody";
import { TodoCardCommentBodyTextArea } from "./TodoCardCommentBodyTextArea";

export default async function Page() {
  const comment: TodoComment = {
    body: `Embarking on a shopping mission for tomorrow's breakfast is a delightful adventure filled with anticipation for a delicious morning meal. The primary items on the shopping list are eggs, milk, and bread, forming the foundation for a hearty and satisfying breakfast`,
    author: {
      name: "richardimaoka",
      imagePath: "/images/richard.jpg",
    },
    createdAt: "Apr 4",
  };

  return (
    <div className={styles.component}>
        <TodoCardCommentBody commentBody={comment.body} />
        <TodoCardCommentBodyTextArea commentBody={comment.body} />
        <TodoCardComment comment={comment} />
    </div>
  );
}
