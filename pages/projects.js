import styles from '../styles/Projects.module.css'
import Project from '../components/Project'

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        Projects
      </div>
      <hr className={styles.line} />
      <div className={styles.body}>
        <Project
          image="/images/background.png" 
          title="Personal Website" 
          description="asdasdsd"
        />
        <Project
          image="/images/background.png" 
          title="World Chat" 
          description="asdasdsd"
        />
        <Project
          image="/images/background.png" 
          title="Coveet" 
          description="asdasdsd"
        />
        <Project 
          image="/images/background.png" 
          title="VR Bowling" 
          description="asdasdsd"
        />
        <Project 
          image="/images/background.png" 
          title="BuddyBreed" 
          description="asdasdsd"
        />
        <Project 
          image="/images/background.png" 
          title="Ruin Explorer" 
          description="asdasdsd"
        />
        <Project 
          image="/images/background.png" 
          title="FIRST Tech Challenge" 
          description="asdasdsd"
        />
        <Project 
          image="/images/background.png" 
          title="RoboCup@Home Education" 
          description="asdasdsd"
        />
        <Project 
          image="/images/background.png" 
          title="RoboCup Junior Soccer" 
          description="asdasdsd"
        />
      </div>
    </div>
  );
}
