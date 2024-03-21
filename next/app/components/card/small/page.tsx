import { TodoCardAssigneeName } from "./right/assigneee/TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "./right/assigneee/TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "./right/assigneee/TodoCardAssigneeTitle";
import { TodoCardCommentBody } from "./left/comment/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./left/description/TodoCardDescriptionBody";
import { TodoCardDescriptionBodyDisplay } from "./left/description/TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyTextArea } from "./left/description/TodoCardDescriptionBodyTextArea";
import { TodoCardDescriptionTitle } from "./left/description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./left/status/TodoCardDueDate";
import { TodoCardLabel } from "./right/label/TodoCardLabel";
import { TodoCardLabelsTitle } from "./right/label/TodoCardLabelsTitle";
import { TodoCardProfilePicture } from "./left/comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./left/status/TodoCardStatusLabel";
import { TodoCardTab } from "./left/tabs/TodoCardTab";
import { TodoCardTimestamp } from "./left/comment/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "./left/TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./left/TodoCardTitleInput";
import { TodoCardWatcherPicture } from "./right/watcher/TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "./right/watcher/TodoCardWatchersTitle";
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
