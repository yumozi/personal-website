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
        title="Towards Adversarially Robust Condensed Dataset by Curvature Regularization"
        publisher="Preparing for ICML 2024"
        authors="Eric Xue, Haoyang Liu, Yifan Shen, Haohan Wang"
      />
      <Paper 
        title="Granular Analysis of Pretrained Object Detectors"
        publisher="International Conference on Artificial Intelligence in Information and Communication"
        authors="Eric Xue, Tae Soo Kim"
        links={[
          <a key={1} href="/papers/GranularAnalysisOfPretrainedObjectDetectors.pdf" target="_blank" rel="noreferrer" className={styles.accent}>PDF <GoLinkExternal/></a>,  
          <a key={2} href="https://ieeexplore.ieee.org/document/9722705/" target="_blank" rel="noreferrer">IEEE <GoLinkExternal/></a>
        ]}
      />
    </div>
  </div>
  );
}