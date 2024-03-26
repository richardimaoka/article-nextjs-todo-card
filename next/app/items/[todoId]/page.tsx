import { TodoItem } from "@/app/api/types";
import { ServerActionWrapper } from "@/app/components/ServerActionWrapper";
import { TodoCard } from "@/app/components/card/TodoCard";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

interface Props {
  params: {
    todoId: string;
  };
}

export default async function Page(props: Props) {
  const res = await fetch(`http://localhost:3036/items/${props.params.todoId}`);
  if (res.status === 404) {
    return notFound();
  }

  const item: TodoItem = await res.json();

  return (
    <div className={styles.component}>
      <ServerActionWrapper>
        <TodoCard item={item} />
      </ServerActionWrapper>
    </div>
  );
}
