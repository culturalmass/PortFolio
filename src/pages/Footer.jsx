import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import styles from "../styles";

export const Footer = () => {
  return (
    <>
      <section className={styles.fSWrapper}>
        <div className="">© 2023 ManuelPortfolio™ All Rights Reserved</div>
        <div className="hidden flex-row sm:flex sm:items-center">
          <a
            href="https://www.linkedin.com/in/manuel-herrera-mu%C3%B1oz-0b453711b/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.fSBtn} />
          </a>
          <a
            href="https://github.com/culturalmass"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className={styles.fSBtnGit} />
          </a>
          <a
            href="https://twitter.com/melcrafter"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare className={styles.fSBtn} />
          </a>
        </div>
      </section>
    </>
  );
};
