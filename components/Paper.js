import styles from '../styles/Paper.module.css'
import Image from 'next/image'

export default function Paper(props) {
  return (
    <div className={styles.box}>
        {/* Box size: 325 x 400 */}
        <h2 className={styles.title}>{props.title}</h2>
        <h3 className={styles.publisher}>{props.publisher}</h3>
        <p className={styles.authors}>{props.authors}</p>
    </div>
  );
}