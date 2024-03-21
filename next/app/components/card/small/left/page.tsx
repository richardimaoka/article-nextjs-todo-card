import { TodoCardCommentBody } from "./comment/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./description/TodoCardDescriptionBody";
import { TodoCardDescriptionBodyDisplay } from "./description/TodoCardDescriptionBodyDisplay";
import { TodoCardDescriptionBodyTextArea } from "./description/TodoCardDescriptionBodyTextArea";
import { TodoCardDescriptionTitle } from "./description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./status/TodoCardDueDate";
import { TodoCardProfilePicture } from "./comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./status/TodoCardStatusLabel";
import { TodoCardTab } from "./tabs/TodoCardTab";
import { TodoCardTimestamp } from "./comment/TodoCardTimestamp";
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
