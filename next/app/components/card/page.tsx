import { TodoCardProfilePicture } from "./TodoCardProfilePicture";
import { TodoCardTimestamp } from "./TodoCardTimestamp";
import { TodoCardTitle } from "./TodoCardTitle";
import { TodoCardCommentBody } from "./TodoCardCommentBody";
import { TodoCardDescriptionBody } from "./TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "./TodoCardDescriptionTitle";
import { TodoCardDueDate } from "./TodoCardDueDate";
import { TodoCardStatusLabel } from "./TodoCardStatusLabel";
import styles from "./page.module.css";
import { TodoCardTab } from "./TodoCardTab";
import { TodoCardTabBar } from "./TodoCardTabBar";
import { TodoCardCommentAuthor } from "./TodoCardCommentAuthor";
import { TodoCardComment } from "./TodoCardComment";
import { TodoCardCommentList } from "./TodoCardCommentList";
import { TodoCardTabArea } from "./TodoCardTabArea";
import { TodoCardDescriptionArea } from "./TodoCardDescriptionArea";
import { TodoCardStatusBar } from "./TodoCardStatusBar";

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
        <TodoCardStatusBar />
      </div>

      <div>
        <TodoCardDescriptionTitle />
      </div>
      <div>
        <TodoCardDescriptionBody />
      </div>
      <div>
        <TodoCardDescriptionArea />
      </div>

      <div>
        <TodoCardTab tabName="Comments" selected />
      </div>
      <div>
        <TodoCardTab tabName="Activities" />
      </div>
      <div>
        <TodoCardTabBar selectTab="Comments" />
      </div>

      <div>
        <TodoCardProfilePicture />
      </div>
      <div>
        <TodoCardTimestamp />
      </div>
      <div>
        <TodoCardCommentAuthor />
      </div>

      <div>
        <TodoCardCommentBody />
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
