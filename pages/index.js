import Link from 'next/dist/client/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.name}>
        Eric Xue
      </div>
      <hr className={styles.line} />
      <div className={styles.content}>
        <div>
          <div className={styles.aboutme}>
            <p>
              Hi! My name is Eric and I am a Computer Science student at the University of Toronto.
            </p>
            <p>
              I have strong interests in <span className={styles.accent}>AI/machine learning</span>. I also have a lot of experience in robotics, app development, and game development. 
            </p>
            <p>
              Outside of my studies, I enjoy video games, anime, reading, and cooking.
            </p>
          </div>
          <div className={styles.learnmore}>
            <Link href="/aboutme">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          {/* Default dimension: 270x506 */}
          <Image src="/images/peko.gif" height={405} width={759} /> 
        </div>
      </div>
    </div>
  );
}
