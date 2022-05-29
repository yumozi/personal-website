import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.earsWrapper}>
                <Image
                    priority
                    src="/images/ears.png"
                    className={styles.image}
                    layout='fill'
                />
        </div>
        <div className={styles.profile}>
            <Image
                priority
                src="/images/profile.jpg"
                height={250}
                width={250}
            />
        </div>
        <ul className={styles.navbar__list}>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/aboutme"><a>About Me</a></Link>
            </li>
            <li>
                <Link href="/projects"><a>Projects</a></Link>
            </li>
            <li>
                <Link href="/research"><a>Research</a></Link>
            </li>
            <li>
                <Link href="/personal"><a>Personal</a></Link>
            </li>
        </ul>
        <div className={styles.contact}>
            <h3>Email</h3>
            <p>xueeric1223@gmail.com</p>
        </div>
        <div className={styles.icons}>
            <a target="_blank" rel="noreferrer" href="https://github.com/yumozi"><AiOutlineGithub color={'#899FD0'} className={styles.icon}/></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eric-xue-4928a81a0/"><AiOutlineLinkedin color={'#899FD0'} className={styles.icon}/></a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/xYumozix"><AiOutlineTwitter color={'#899FD0'} className={styles.icon}/></a>
        </div>
    </div>
  );
}
export default Navbar;
