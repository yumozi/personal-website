import styles from '../styles/Research.module.css'

export default function Research() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.name}>
      Research
    </div>
    <hr className={styles.line} />
    <div className={styles.body}> 
      <div className={styles.title}>
        "Granular Analysis of Pretrained Object Detectors"
      </div>
    </div>
  </div>
  );
}