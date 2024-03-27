import { TodoCardAssigneeName } from "./1-assignee/TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "./1-assignee/TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "./1-assignee/TodoCardAssigneeTitle";
import { TodoCardLabel } from "./3-label/TodoCardLabel";
import { TodoCardLabelsTitle } from "./3-label/TodoCardLabelsTitle";
import { TodoCardWatcherPicture } from "./2-watcher/TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "./2-watcher/TodoCardWatchersTitle";
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
