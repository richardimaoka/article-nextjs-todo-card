import { TodoCardAssigneeName } from "../right/1-assigneee/TodoCardAssigneeName";
import { TodoCardAssigneePicture } from "../right/1-assigneee/TodoCardAssigneePicture";
import { TodoCardAssigneeTitle } from "../right/1-assigneee/TodoCardAssigneeTitle";
import { TodoCardCommentBody } from "../left/4-tabs/comment/TodoCardCommentBody";
import {TodoCardDescriptionDisplay } from "../left/3-description/TodoCardDescriptionDisplay";
import { TodoCardDescriptionTextArea } from "../left/3-description/TodoCardDescriptionTextArea";
import { TodoCardDescriptionTitle } from "../left/3-description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "../left/2-status/TodoCardDueDate";
import { TodoCardLabel } from "../right/3-label/TodoCardLabel";
import { TodoCardLabelsTitle } from "../right/3-label/TodoCardLabelsTitle";
import { TodoCardProfilePicture } from "../left/4-tabs/comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "../left/2-status/TodoCardStatusLabel";
import { TodoCardTab } from "../left/4-tabs/TodoCardTab";
import { TodoCardTimestamp } from "../left/4-tabs/comment/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "../left/1-title/TodoCardTitleDisplay";
import { TodoCardTitleInput } from "../left/1-title/TodoCardTitleInput";
import { TodoCardWatcherPicture } from "../right/2-watcher/TodoCardWatcherPicture";
import { TodoCardWatchersTitle } from "../right/2-watcher/TodoCardWatchersTitle";
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
        <TodoCardDescriptionDisplay
          description={`Embarking on a shopping mission for tomorrow's breakfast is a delightful
      adventure filled with anticipation for a delicious morning meal. The
      primary items on the shopping list are eggs, milk, and bread, forming the
      foundation for a hearty and satisfying breakfast.`}
        />
      </div>
      <div>
        <TodoCardDescriptionTextArea description="aawith anticipation" />
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
