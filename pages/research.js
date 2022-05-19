import styles from '../styles/Research.module.css'
import Paper from '../components/Paper'
import { GoLinkExternal } from 'react-icons/go'

export default function Research() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.name}>
      Research
    </div>
    <hr className={styles.line} />
    <div className={styles.body}>
      <Paper 
        title="Granular Analysis of Pretrained Object Detectors"
        publisher="International Conference on Artificial Intelligence in Information and Communication"
        authors="Eric Xue, Tae Soo Kim"
        links={[
          <a href="/papers/GranularAnalysisOfPretrainedObjectDetectors.pdf" target="_blank" rel="noreferrer" className={styles.accent}>PDF <GoLinkExternal/></a>,  
          <a href="https://ieeexplore.ieee.org/document/9722705/" target="_blank" rel="noreferrer">IEEE <GoLinkExternal/></a>
        ]}
      />
    </div>
  </div>
  );
}