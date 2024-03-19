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
import { TodoCardTitleDisplay } from "../small/TodoCardTitleDisplay";

import { TodoCardAssignee } from "./TodoCardAssignee";
import { TodoCardAssingeeArea } from "./TodoCardAssingeeArea";
import { TodoCardLabelsArea } from "./TodoCardLabelsArea";
import { TodoCardWatchersArea } from "./TodoCardWatchersArea";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      {/* <div>
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
       */}

      <div>
        <TodoCardAssingeeArea />
      </div>

      <div>
        <TodoCardWatchersArea />
      </div>

      <div>
        <TodoCardLabelsArea />
      </div>
    </div>
  );
}
