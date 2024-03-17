import { TodoCardComment } from "../medium/TodoCardComment";
import { TodoCardCommentAuthor } from "../medium/TodoCardCommentAuthor";
import { TodoCardCommentList } from "../medium/TodoCardCommentList";
import { TodoCardDescriptionArea } from "../medium/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "../medium/TodoCardStatusBar";
import { TodoCardTabArea } from "../medium/TodoCardTabArea";
import { TodoCardTabBar } from "../medium/TodoCardTabBar";
import { TodoCardCommentBody } from "../small/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "../small/TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "../small/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "../small/TodoCardDueDate";
import { TodoCardProfilePicture } from "../small/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "../small/TodoCardStatusLabel";
import { TodoCardTab } from "../small/TodoCardTab";
import { TodoCardTimestamp } from "../small/TodoCardTimestamp";
import { TodoCardTitle } from "../small/TodoCardTitle";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>
        <TodoCardStatusBar />
      </div>

      <div>
        <TodoCardDescriptionArea />
      </div>

      <div>
        <TodoCardTabBar selectTab="Comments" />
      </div>

      <div>
        <TodoCardCommentAuthor />
      </div>

      <div>
        <TodoCardComment />
      </div>
      <div>
        <TodoCardCommentList />
      </div>
      <div>
        <TodoCardTabArea />
      </div>
    </div>
  );
}
