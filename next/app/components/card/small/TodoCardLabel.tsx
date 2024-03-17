import styles from "./TodoCardLabel.module.css";

interface Props {
  name: string;
  color?: string;
}

export function TodoCardLabel(props: Props) {
  const labelColor = props.color ? props.color : "#F4A267";

  return (
    <div style={{ backgroundColor: labelColor }} className={styles.component}>
      {props.name}
    </div>
  );
}
