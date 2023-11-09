import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import styles from "../styles";

export const Footer = () => {
  return (
    <>
      <section className={styles.fSWrapper}>
        <div className="">© 2023 ManuelPortfolio™ All Rights Reserved</div>
        <div className="flex flex-row sm:flex">
          <a
            href="https://www.linkedin.com/in/manuel-herrera-mu%C3%B1oz-0b453711b/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.fSBtn} />
          </a>
          <a
            href="https://twitter.com/melcrafter"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare className={styles.fSBtn} />
          </a>
          <a
            href="https://discordapp.com/users/301732285181460480"
            target="_blank"
            rel="noreferrer"
          >
            <RiDiscordFill className={styles.fSBtn} />
          </a>
        </div>
      </section>
    </>
  );
};
