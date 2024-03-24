import { TodoCardTitleDisplay } from "./1-title/TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./1-title/TodoCardTitleInput";
import { TodoCardDueDate } from "./2-status/TodoCardDueDate";
import { TodoCardStatusLabel } from "./2-status/TodoCardStatusLabel";
import { TodoCardDescriptionDisplay } from "./3-description/TodoCardDescriptionDisplay";
import { TodoCardDescriptionTextArea } from "./3-description/TodoCardDescriptionTextArea";
import { TodoCardDescriptionTitle } from "./3-description/TodoCardDescriptionTitle";
import { TodoCardTab } from "./4-tabs/TodoCardTab";
import { TodoCardCommentBodyDisplay } from "./4-tabs/comment/TodoCardCommentBodyDisplay";
import { TodoCardProfilePicture } from "./4-tabs/comment/TodoCardProfilePicture";
import { TodoCardTimestamp } from "./4-tabs/comment/TodoCardTimestamp";
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
        <TodoCardDueDate dateString={new Date().toDateString()} />
      </div>
      <div>
        <TodoCardDescriptionTitle />
      </div>
      <div>
        <TodoCardDescriptionDisplay description="" />
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
        <TodoCardCommentBodyDisplay commentBody=""/>
      </div>
    </div>
  );
}
