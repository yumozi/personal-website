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
          image="/images/Coveet.png" 
          title="Coveet" 
          description="An interactive visualization tool to compare the severeness of COVID-19 with overall sentiment on Twitter written in Python. The Natural Language Processing Toolkit (NLTK) is used to analyze the text and the sentiment of the tweets."
        />
        <Project 
          image="/images/Bowling.png" 
          title="VR Bowling" 
          description="A VR bowling game developed using Unity. Outside of bowling, players can also freely explore the bowling alley using teleportation." 
        />
        <Project 
          image="/images/BuddyBreed.jpg" 
          title="BuddyBreed" 
          description="An iOS app that allows users to identify a dog's breed from a single photo. Built with Swift and Firebase. Used pretrained machine learning models in the backend to perform breed detection."
        />
        <Project 
          image="/images/Ruin.png" 
          title="Ruin Explorer" 
          description="A game where players control a boy who walks through an unknown ruin all by himself. A small Unity project that helped me to  learned Unity's lighting, audio, and animation system in-depth."
        />
        <Project 
          image="/images/background.png" 
          title="FIRST Tech Challenge" 
          description="asdasdsd"
        />
        <Project 
          image="/images/RoboCupHome.png" 
          title="RoboCup@Home Education" 
          description="A robotics competition where teams present home-service robots to score points by accomplishing tasks. We used TurtleBot as the base robot and programed it with ROS. Unforunately, the competition was cancelled due to COVID-19."
        />
        <Project 
          image="/images/RoboCupJunior.png" 
          title="RoboCup Junior Soccer" 
          description="A worldwide robotics tournament where teams of autonomous robot compete in a face-paced soccer game. My team won numerous regional tournaments and competed in the world finals three times, winning 15th, 3rd, and 2nd place overall."
        />
      </div>
    </div>
  );
}
