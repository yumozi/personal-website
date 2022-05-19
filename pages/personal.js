import styles from '../styles/Personal.module.css'

export default function Personal() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.name}>
      Personal
    </div>
    <hr className={styles.line} />
    <div className={styles.body}>
        Coming Soon!
    </div>
  </div>
  );
}