import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.ears}>
            <Image
                priority
                src="/images/ears.png"
                height={165}
                width={165}
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
            <a target="_blank" href="https://github.com/yumozi"><AiOutlineGithub size={40} color={'#899FD0'}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/eric-xue-4928a81a0/"><AiOutlineLinkedin size={40} color={'#899FD0'}/></a>
            <a target="_blank" href="https://twitter.com/xYumozix"><AiOutlineTwitter size={40} color={'#899FD0'}/></a>
        </div>
    </div>
  );
}
export default Navbar;
