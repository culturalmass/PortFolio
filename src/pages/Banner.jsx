import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import video from "../assets/img/loopBg.mp4";
import styles from "../styles";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Front-End Dev",
    "Prompt Enthusiast",
    "Blockchain Dev",
    "Blender Enthusiast",
    "Web3 Dev",
    "Python enthusiast",
  ];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <>
      <section className={styles.bSWrapper} id="home">
        <div className={styles.bSContainer}>
          <button className={styles.bSTitle}>Welcome to my Portfolio</button>
          <h1 className={styles.bSPromt}>
            {`Hi! I'm Manuel`}
            <span className={styles.bSInfo}>{text}</span>
            <span className={styles.bSPulse}>|</span>
          </h1>
          <h3 className={styles.bSLTittle}>More About me</h3>
          <span className={styles.bSInfoText}>
            strong communication, organized, easy to <br /> approach,
          </span>
          <br />
          <span className={styles.bSInfoText}>
            Native Spanish speaker, fluent in English,
          </span>
          <br />
          <span className={styles.bSInfoText}>
            eager to learn, goal-oriented.
          </span>
          <a
            className={styles.bSConnect}
            href="mailto:herrera_manuel18@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Let’s Connect
            <BsFillArrowRightCircleFill className={styles.bSBtn} />
          </a>
          <div className={styles.bSVideoWrapper}>
            <video width="800" height="500" loop autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};
