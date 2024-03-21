import { TodoCardCommentBody } from "./TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";
import { TodoCardDescriptionBodyDisplay } from "./TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyInput } from "./TodoCardDescriptionBodyInput";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./TodoCardDueDate";
import { TodoCardProfilePicture } from "./TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { TodoCardTab } from "./TodoCardTab";
import { TodoCardTimestamp } from "./TodoCardTimestamp";
import { TodoCardTitleDisplay } from "./TodoCardTitleDisplay";
import { TodoCardTitleInput } from "./TodoCardTitleInput";
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
    </div>
  );
}
