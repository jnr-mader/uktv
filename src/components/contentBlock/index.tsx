import styles from './style.module.css';

type Props = {
    contentTitle: string;
    contentText: string
}

export default function index({contentTitle,contentText}: Props) {
  return (
    <div className={styles.block}>
        <p className={styles.title}>{contentTitle}</p>
        <p className={styles.content}>{contentText}</p>
    </div>
  )
}