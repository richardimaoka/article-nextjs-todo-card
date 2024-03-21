import { TabTypes, TodoCardTab } from "../small/left/TodoCardTab";
import styles from "./TodoCardTabBar.module.css";

interface Props {
  selectTab?: TabTypes;
}

export function TodoCardTabBar(props: Props) {
  const selectTab: TabTypes = props.selectTab ? props.selectTab : "Comments";

  return (
    <div className={styles.component}>
      <div className={styles.layout}>
        <TodoCardTab tabName="Comments" selected={selectTab === "Comments"} />
        <TodoCardTab
          tabName="Activities"
          selected={selectTab === "Activities"}
        />
        <TodoCardTab tabName="Files" selected={selectTab === "Files"} />
      </div>
    </div>
  );
}
