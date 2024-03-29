import { TodoCardCommentCard } from "../../left/4-tabs/comment/TodoCardCommentCard";
import { TodoCardCommentAuthor } from "../../left/4-tabs/comment/TodoCardCommentAuthor";
import { TodoCardCommentList } from "../../left/4-tabs/comment/TodoCardCommentList";
import { TodoCardDescriptionArea } from "../../left/3-description/TodoCardDescriptionArea";
import { TodoCardStatusBar } from "../../left/2-status/TodoCardStatusBar";
import { TodoCardTabArea } from "../../left/4-tabs/TodoCardTabArea";
import { TodoCardTabBar } from "../../left/4-tabs/TodoCardTabBar";
import { TodoCardCommentDisplay } from "../../left/4-tabs/comment/TodoCardCommentDisplay";
import { TodoCardDescription } from "../../left/3-description/TodoCardDescription";
import { TodoCardDescriptionTitle } from "../../left/3-description/TodoCardDescriptionTitle";
import { TodoCardDueDate } from "../../left/2-status/TodoCardDueDate";
import { TodoCardProfilePicture } from "../../left/4-tabs/comment/TodoCardProfilePicture";
import { TodoCardStatusLabel } from "../../left/2-status/TodoCardStatusLabel";
import { TodoCardTab } from "../../left/4-tabs/TodoCardTab";
import { TodoCardTimestamp } from "../../left/4-tabs/comment/TodoCardTimestamp";
import { TodoCardTitleDisplay } from "../../left/1-title/TodoCardTitleDisplay";

import { TodoCardAssignee } from "../../right/1-assignee/TodoCardAssignee";
import { TodoCardAssingeeArea } from "../../right/1-assignee/TodoCardAssingeeArea";
import { TodoCardLabelsArea } from "../../right/3-label/TodoCardLabelsArea";
import { TodoCardWatchersArea } from "../../right/2-watcher/TodoCardWatchersArea";
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
