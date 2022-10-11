import styles from '../styles/AboutMe.module.css'
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Hello, I am Eric.
      </div>
      <div className={styles.body}>
        <div className={styles.paragraphWrapper}>
          <p>There is a certain future that I would like to see.</p>
          <p>I can&apos;t exactly describe what it looks like, but I will know when we have found it. It is a future that is much more exciting and full of possibilities for everyone.</p>
          <p>When I discovered programming at a young age, I knew this was the tool that I needed to get us closer to that future. Since then, I had been building robots of various kinds, different apps, websites, games...</p>
          <p>To learn more about the projects that I had done, check out my <Link href="/projects"><a className={styles.accent}>Projects</a></Link> page.</p>
          <p>These days, the majority of my attention is focused on AI. In addition to building AI applications, I also conduct AI-related research. Visit the <Link href="/research"><a className={styles.accent}>Research</a></Link> page to learn more about my published and ongoing research.</p>
          <p>In my personal life, I enjoy a variety of hobbies. Click on <Link href="/personal"><a className={styles.accent}>Personal</a></Link> to find out! </p>
          <hr className={styles.line} />
          <p>Also, you can download a copy of my resume <a href="/resume/ResumeEricXue.pdf" target="_blank" rel="noreferrer" className={styles.accent}>here</a>.</p>
        </div>
      </div>
    </div>
  );
}
