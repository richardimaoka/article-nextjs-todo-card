import { TodoCardAssigneeName } from "./right/1-assigneee/TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "./right/1-assigneee/TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "./right/1-assigneee/TodoCardAssigneeTitle";
import { TodoCardCommentBody } from "./left/4-tabs/comment/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./left/3-description/TodoCardDescriptionBody";
import { TodoCardDescriptionBodyDisplay } from "./left/3-description/TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyTextArea } from "./left/3-description/TodoCardDescriptionBodyTextArea";
import { TodoCardDescriptionTitle } from "./left/3-description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./left/2-status/TodoCardDueDate";
import { TodoCardLabel } from "./right/3-label/TodoCardLabel";
import { TodoCardLabelsTitle } from "./right/3-label/TodoCardLabelsTitle";
import { TodoCardProfilePicture } from "./left/4-tabs/comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./left/2-status/TodoCardStatusLabel";
import { TodoCardTab } from "./left/4-tabs/TodoCardTab";
import { TodoCardTimestamp } from "./left/4-tabs/comment/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "./left/1-title/TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./left/1-title/TodoCardTitleInput";
import { TodoCardWatcherPicture } from "./right/2-watcher/TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "./right/2-watcher/TodoCardWatchersTitle";
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
        <TodoCardDescriptionBodyDisplay />
      </div>
      <div>
        <TodoCardDescriptionBodyTextArea description="aawith anticipation" />
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
