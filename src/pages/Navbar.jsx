import { HashLink as Link } from "react-router-hash-link";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { TbCircleArrowUpFilled } from "react-icons/tb";
import logo from "../assets/img/logoPortfolio.jpg";
import styles from "../styles";

export const Navbar = () => {
  return (
    <>
      <nav className={styles.nBWrapper}>
        <img className={styles.nBImg} src={logo} alt="logo" />
        <Link className={styles.nBLinkWrapper} smooth to="#home">
          Home
        </Link>
        <Link className={styles.nBLinkWrapper} smooth to="#skills">
          Skill
        </Link>
        <Link className={styles.nBLinkWrapper} smooth to="#projects">
          Projects
        </Link>
        <div className={styles.flexCenter}>
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
        <a
          className={styles.nBLinkWrapper}
          href="mailto:herrera_manuel18@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Connect
        </a>
        <Link smooth to="#home" className={styles.nBBtnBottom}>
          <TbCircleArrowUpFilled />
        </Link>
      </nav>
    </>
  );
};
