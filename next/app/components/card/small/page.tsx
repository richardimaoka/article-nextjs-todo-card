import { TodoCardAssigneeName } from "./right/TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "./right/TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "./right/TodoCardAssigneeTitle";
import { TodoCardCommentBody } from "./left/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./left/TodoCardDescriptionBody";
import { TodoCardDescriptionBodyDisplay } from "./left/TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyInput } from "./left/TodoCardDescriptionBodyInput";
import { TodoCardDescriptionTitle } from "./left/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./left/TodoCardDueDate";
import { TodoCardLabel } from "./right/TodoCardLabel";
import { TodoCardLabelsTitle } from "./right/TodoCardLabelsTitle";
import { TodoCardProfilePicture } from "./left/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./left/TodoCardStatusLabel";
import { TodoCardTab } from "./left/TodoCardTab";
import { TodoCardTimestamp } from "./left/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "./left/TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./left/TodoCardTitleInput";
import { TodoCardWatcherPicture } from "./right/TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "./right/TodoCardWatchersTitle";
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
        <TodoCardDescriptionBodyInput description="aawith anticipation" />
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
