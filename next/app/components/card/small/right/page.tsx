import { TodoCardAssigneeName } from "./assigneee/TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "./assigneee/TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "./assigneee/TodoCardAssigneeTitle";
import { TodoCardLabel } from "./label/TodoCardLabel";
import { TodoCardLabelsTitle } from "./label/TodoCardLabelsTitle";
import { TodoCardWatcherPicture } from "./watcher/TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "./watcher/TodoCardWatchersTitle";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardAssigneeTitle />
      </div>
      <div>
        <TodoCardAssigneePicture />
      </div>
      <div>
        <TodoCardAssigneeName name={"Richard Imaoka"} />
      </div>

      <div>
        <TodoCardWatchersTitle />
      </div>
      <div>
        <TodoCardWatcherPicture />
      </div>

      <div>
        <TodoCardLabelsTitle />
      </div>
      <div>
        <TodoCardLabel name="label" />
      </div>
    </div>
  );
}
