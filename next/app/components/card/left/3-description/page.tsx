import { TodoItem } from "@/app/api/types";
import { TodoCardDescriptionBodyDisplay } from "./TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyTextArea } from "./TodoCardDescriptionBodyTextArea";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";
import styles from "./page.module.css";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";

export default async function Page() {
  const item: TodoItem = {
    id: "a",
    title: "titleeee",
    description: "descreeee",
  };

  return (
    <div className={styles.component}>
      <div>
        <TodoCardDescriptionTitle />
      </div>
      <div>
        <TodoCardDescriptionBodyDisplay description={"aawith anticipation"} />
      </div>
      <div>
        <TodoCardDescriptionBodyTextArea description="aawith anticipation" />
      </div>
      <div>
        <TodoCardDescriptionBody item={item} />
      </div>
    </div>
  );
}
