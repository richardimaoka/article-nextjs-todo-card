import { TodoCardComment } from "../small/left/4-tabs/comment/TodoCardComment";
import { TodoCardCommentAuthor } from "../small/left/4-tabs/comment/TodoCardCommentAuthor";
import { TodoCardCommentList } from "../small/left/4-tabs/comment/TodoCardCommentList";
import { TodoCardDescriptionArea } from "../small/left/3-description/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "../small/left/2-status/TodoCardStatusBar";
import { TodoCardTabArea } from "../small/left/4-tabs/TodoCardTabArea";
import { TodoCardTabBar } from "../small/left/4-tabs/TodoCardTabBar";
import { TodoCardCommentBody } from "../small/TodoCardCommentBody";
import { TodoCardDescriptionBody } from "../small/TodoCardDescriptionBody";
import { TodoCardDescriptionTitle } from "../small/left/3-description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "../small/left/2-status/TodoCardDueDate";
import { TodoCardProfilePicture } from "../small/left/4-tabs/comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "../small/left/2-status/TodoCardStatusLabel";
import { TodoCardTab } from "../small/left/4-tabs/TodoCardTab";
import { TodoCardTimestamp } from "../small/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "../small/left/1-title/TodoCardTitleDisplay";

import { TodoCardAssignee } from "../small/right/1-assigneee/TodoCardAssignee";
import { TodoCardAssingeeArea } from "../small/right/1-assigneee/TodoCardAssingeeArea";
import { TodoCardLabelsArea } from "../small/right/3-label/TodoCardLabelsArea";
import { TodoCardWatchersArea } from "../small/right/2-watcher/TodoCardWatchersArea";
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
