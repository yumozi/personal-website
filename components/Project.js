import styles from '../styles/Project.module.css'
import Image from 'next/image'

export default function Project(props) {
  return (
    <div className={styles.box}>
        {/* Box size: 325 x 400 */}
        <div className={styles.imageContainer}>
          <Image src={props.image} layout='fill'/> 
        </div>
        <div className={styles.text}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  );
}