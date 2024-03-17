import { ProfilePicture } from "./TodoCardProfilePicture";
import { TodoCardTimestamp } from "./TodoCardTimestamp";
import { TodoCardTitle } from "./TodoCardTitle";
import { TodoCardCommentBody } from "./TodoCardCommentBody";
import { TodoCardCommentsTab } from "./TodoCardCommentsTab";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./TodoCardDueDate";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitle title="arrr" />
      </div>

      <div>
        <TodoCardStatusLabel />
      </div>

      <div>
        <TodoCardDueDate />
      </div>

      <div>
        <TodoCardDescriptionTitle />
      </div>

      <div>
        <TodoCardDescriptionBody />
      </div>

      <div>
        <TodoCardCommentsTab selected />
      </div>
      <div>
        <TodoCardCommentsTab />
      </div>

      <div>
        <ProfilePicture />
      </div>

      <div>
        <TodoCardTimestamp />
      </div>

      <div>
        <TodoCardCommentBody />
      </div>
    </div>
  );
}
