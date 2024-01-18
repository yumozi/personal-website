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
          image="/images/Miraiai.png" 
          title="Mirai" 
          description="A conversational AI platform aiming to create realistic characters."
        />
        <Project
          image="/images/Tweeter.png" 
          title="Tweeter" 
          description="A small GPT-based AI tool that helps you formulate any ideas into a tweet."
        />
        <Project
          image="/images/Website.png" 
          title="Personal Website" 
          description="I developed this website using Next.js as a way to showcase my projects. It is still a work in progress as I will slowly add more contents and features to it, such as responsive design for better mobile support."
        />
        <Project
          image="/images/WorldChat.png" 
          title="World Chat" 
          description="This is a web social media that I am developing to promote connectedness among people in the world. It is still a work in progress. The frontend is built using React and the data is managed with MongoDB."
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
          image="/images/FTC.jpg" 
          title="FIRST Tech Challenge" 
          description="I led our high school's robotics team to compete in the FIRST Tech Challenge. Outside of being the captain, I was responsible to program the robot's autonomous and remote control mode using Java.I also developed the object recognition feature using Vuforia."
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
