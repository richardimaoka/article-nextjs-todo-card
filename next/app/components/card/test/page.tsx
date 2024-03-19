import { TodoItem } from "@/app/api/types";
import { TodoCardTitle } from "../small/TodoCardTitle";
import { SubmitButton } from "./SubmitButton";

import styles from "./page.module.css";

interface Props {}

export default async function Page() {
  const res = await fetch("http://localhost:3036/items/a");
  const item: TodoItem = await res.json();
  console.log(item);
  return (
    <div className={styles.component}>
      <form>
        <SubmitButton />
      </form>
      <TodoCardTitle item={item} />
    </div>
  );
}
