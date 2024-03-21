import { TodoCardCommentBody } from "./4-tabs/comment/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./3-description/TodoCardDescriptionBody";
import { TodoCardDescriptionBodyDisplay } from "./3-description/TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyTextArea } from "./3-description/TodoCardDescriptionBodyTextArea";
import { TodoCardDescriptionTitle } from "./3-description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./2-status/TodoCardDueDate";
import { TodoCardProfilePicture } from "./4-tabs/comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./2-status/TodoCardStatusLabel";
import { TodoCardTab } from "./4-tabs/TodoCardTab";
import { TodoCardTimestamp } from "./4-tabs/comment/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "./1-title/TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./1-title/TodoCardTitleInput";
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
    </div>
  );
}
