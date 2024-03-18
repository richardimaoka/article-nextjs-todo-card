import { TitleInput } from "./TitleInput";
import styles from "./page.module.css";

interface Props {}

export default function Page() {
  return (
    <div className={styles.component}>
      <TitleInput title="" />
    </div>
  );
}
