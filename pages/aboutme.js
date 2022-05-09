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
          <p>I am a dreamer, but I don't just dream. </p>
          <p>I am eager to realize the future that I want to see. A future with much more possibilities to offer than what we have right now.</p>
          <p>When I discovered coding at a young age, I knew this was the tool that I needed to create the things that I want to create. Since then, I had been building robots of various kinds, different apps, websites, games...</p>
          <p>To learn more about the projects that I had done, check out my <Link href="/projects"><a className={styles.accent}>Projects</a></Link> page.</p>
          <p>These days, the majority of my attention is focused on AI. In addition to building AI applications, I also conduct AI-related research. Visit the <Link href="/research"><a className={styles.accent}>Research</a></Link> page to learn more about my published and ongoing research.</p>
          <p>In my personal life, I enjoy a variety of hobbies. Click on <Link href="/personal"><a className={styles.accent}>Personal</a></Link> to find out! </p>
          <hr className={styles.line} />
          <p>Also, you can download a copy of my resume <a href="/resume/LongResumeEric.pdf" target="_blank" className={styles.accent}>here</a>.</p>
        </div>
      </div>
    </div>
  );
}
