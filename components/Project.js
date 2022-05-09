import styles from '../styles/Project.module.css'
import Image from 'next/image'

export default function Project(props) {
  return (
    <div className={styles.box}>
        <Image src={props.image} width={300} height={150}/>
        <div className={styles.text}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  );
}