import { TodoCardAssigneeName } from "./TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "./TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "./TodoCardAssigneeTitle";
import { TodoCardLabel } from "./TodoCardLabel";
import { TodoCardLabelsTitle } from "./TodoCardLabelsTitle";
import { TodoCardWatcherPicture } from "./TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "./TodoCardWatchersTitle";
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
