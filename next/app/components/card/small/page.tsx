import { TodoCardAssigneeName } from "./TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "./TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "./TodoCardAssigneeTitle";
import { TodoCardCommentBody } from "./TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./TodoCardDueDate";
import { TodoCardLabel } from "./TodoCardLabel";
import { TodoCardLabelsTitle } from "./TodoCardLabelsTitle";
import { TodoCardProfilePicture } from "./TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { TodoCardTab } from "./TodoCardTab";
import { TodoCardTimestamp } from "./TodoCardTimestamp";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";
import { TodoCardWatcherPicture } from "./TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "./TodoCardWatchersTitle";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardTitleDisplay title="arrr" />
      </div>
      <div>
        <TodoCardTitleInput title="arrr" />
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
        <TodoCardTab tabName="Comments" selected />
      </div>
      <div>
        <TodoCardTab tabName="Activities" />
      </div>
      <div>
        <TodoCardProfilePicture />
      </div>
      <div>
        <TodoCardTimestamp />
      </div>
      <div>
        <TodoCardCommentBody />
      </div>

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
