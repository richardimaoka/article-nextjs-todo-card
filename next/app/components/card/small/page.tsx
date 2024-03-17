import { TodoCardComment } from "../medium/TodoCardComment";
import { TodoCardCommentAuthor } from "../medium/TodoCardCommentAuthor";
import { TodoCardCommentList } from "../medium/TodoCardCommentList";
import { TodoCardDescriptionArea } from "../medium/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "../medium/TodoCardStatusBar";
import { TodoCardTabArea } from "../medium/TodoCardTabArea";
import { TodoCardTabBar } from "../medium/TodoCardTabBar";
import { TodoCardCommentBody } from "./TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./TodoCardDueDate";
import { TodoCardProfilePicture } from "./TodoCardProfilePicture";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import { TodoCardTab } from "./TodoCardTab";
import { TodoCardTimestamp } from "./TodoCardTimestamp";
import { TodoCardTitle } from "./TodoCardTitle";
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
