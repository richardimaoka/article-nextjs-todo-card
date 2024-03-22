import { TodoItem } from "@/app/api/types";
import { TodoCardDescriptionDisplay } from "./TodoCardDescriptionDisplay";
import { TodoCardDescriptionTextArea } from "./TodoCardDescriptionTextArea";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";
import styles from "./page.module.css";
import { TodoCardDescription } from "./TodoCardDescription";

export default async function Page() {
  const item: TodoItem = {
    id: "a",
    description: "titleeee",
    description: "descreeee",
  };

  return (
    <div className={styles.component}>
      <div>
        <TodoCardDescriptionTitle />
      </div>
      <div>
        <TodoCardDescriptionDisplay description={"aawith anticipation"} />
      </div>
      <div>
        <TodoCardDescriptionTextArea description="aawith anticipation" />
      </div>
      <div>
        <TodoCardDescription item={item} />
      </div>
    </div>
  );
}
