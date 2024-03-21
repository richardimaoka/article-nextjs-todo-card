import { TodoCardComment } from "../medium/TodoCardComment";
import { TodoCardCommentAuthor } from "../medium/TodoCardCommentAuthor";
import { TodoCardCommentList } from "../medium/TodoCardCommentList";
import { TodoCardDescriptionArea } from "../medium/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "../medium/TodoCardStatusBar";
import { TodoCardTabArea } from "../medium/TodoCardTabArea";
import { TodoCardTabBar } from "../medium/TodoCardTabBar";
import { TodoCardCommentBody } from "../small/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "../small/TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "../small/left/description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "../small/left/status/TodoCardDueDate";
import { TodoCardProfilePicture } from "../small/left/comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "../small/left/status/TodoCardStatusLabel";
import { TodoCardTab } from "../small/left/tabs/TodoCardTab";
import { TodoCardTimestamp } from "../small/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "../small/left/TodoCardTitleDisplay";

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
