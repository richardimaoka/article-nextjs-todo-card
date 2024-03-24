import { TodoComment, TodoItem } from "@/app/api/types";
import styles from "./page.module.css";
import { TodoCardCommentBodyDisplay } from "./TodoCardCommentBodyDisplay";
import { TodoCardCommentBodyTextArea } from "./TodoCardCommentBodyTextArea";
import { TodoCardCommentBody } from "./TodoCardCommentBody";

export default async function Page() {
  const comment: TodoComment = {
    id: "asdfdsfds",
    body: `Embarking on a shopping mission for tomorrow's breakfast is a delightful adventure filled with anticipation for a delicious morning meal. The primary items on the shopping list are eggs, milk, and bread, forming the foundation for a hearty and satisfying breakfast`,
    author: {
      id: "rid",
      name: "richardimaoka",
      imagePath: "/images/richard.jpg",
    },
    createdAt: new Date(),
  };

  const item: TodoItem = {
    id: "a",
    title: "titleeee",
    description: "descreeee",
    status: "In Progress",
    comments: [comment],
    dueDate: new Date().toDateString(),
  };

  return (
    <div className={styles.component}>
      <TodoCardCommentBodyDisplay commentBody={comment.body} />
      <TodoCardCommentBodyTextArea commentBody={comment.body} />
      <TodoCardCommentBody item={item} comment={comment} />
    </div>
  );
}
