import { TodoComment, TodoItem } from "@/app/api/types";
import styles from "./page.module.css";
import { TodoCardCommentDisplay } from "./TodoCardCommentDisplay";
import { TodoCardCommentTextArea } from "./TodoCardCommentTextArea";
import { TodoCardComment } from "./TodoCardComment";
import { TodoCardCommentAddButton } from "./TodoCardCommentAddButton";
import { TodoCardCommentCard } from "./TodoCardCommentCard";
import { TodoCardNewComment } from "./TodoCardNewComment";

export default async function Page() {
  const comment: TodoComment = {
    id: "asdfdsfds",
    body: `Embarking on a shopping mission for tomorrow's breakfast is a delightful adventure filled with anticipation for a delicious morning meal. The primary items on the shopping list are eggs, milk, and bread, forming the foundation for a hearty and satisfying breakfast`,
    author: {
      id: "rid",
      name: "richardimaoka",
      imagePath: "/images/richard.jpg",
    },
    createdAt: new Date().toDateString(),
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
      <TodoCardCommentDisplay commentBody={comment.body} />
      <TodoCardCommentTextArea commentBody={comment.body} />
      <TodoCardComment item={item} comment={comment} />
      <TodoCardCommentCard item={item} comment={comment} />
      <TodoCardCommentAddButton />

      <TodoCardNewComment item={item} />
    </div>
  );
}
