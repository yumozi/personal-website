import styles from '../styles/Research.module.css'
import Paper from '../components/Paper'

export default function Research() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.name}>
      Research
    </div>
    <hr className={styles.line} />
    <div className={styles.body}>
      <Paper 
        title="Granular Analysis of Pretrained Detectors"
        publisher="International Conference on Artificial Intelligence in Information and Communication"
        authors="Eric Xue, Tae Soo Kim"
      />
    </div>
  </div>
  );
}