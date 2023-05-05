import { useState } from "react";
import { projects } from "../assets";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import styles from "../styles";

export const Projects = () => {
  const slidePagination = 6;
  const [pos, setPos] = useState({
    pos1: 0,
    pos2: 6,
    pagination: Math.ceil(projects.length / slidePagination),
    currentPage: 1,
  });

  const handleProjects = ({ option }) => {
    if (option === 0 || option > pos.pagination) {
      return;
    }
    if (option > pos.currentPage) {
      setPos({
        pos1: pos.pos1 + 6,
        pos2: pos.pos2 + 6,
        pagination: pos.pagination,
        currentPage: option,
      });
    } else if (option < pos.currentPage) {
      setPos({
        pos1: pos.pos1 - 6,
        pos2: pos.pos2 - 6,
        pagination: pos.pagination,
        currentPage: option,
      });
    }
  };
  return (
    <>
      <section className={styles.pSWrapper}>
        <h1 className={styles.pSTittle} id="projects">
          Projects
        </h1>
        <div className={`${styles.flexCenter} ${styles.projectsWrapper}`}>
          {projects.slice(pos.pos1, pos.pos2).map((project) => (
            <a
              href={`${project.url}`}
              target="_blank"
              rel="noreferrer"
              key={project.id}
            >
              <div className={`${styles.flexCenter} ${styles.pSBgCard}`}>
                <img
                  src={project.image}
                  alt={"project_" + project.id}
                  className={styles.projectsCardImg}
                />
                <div className={styles.info}>
                  <p className={styles.projectsCardText}>{project.name}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <IoIosArrowDropleftCircle
          className={`${pos.pos1 === 0 ? styles.pSHidden : styles.pSBtnLeft}`}
          onClick={() => {
            handleProjects({ option: pos.currentPage + -1 });
          }}
        />
        <IoIosArrowDroprightCircle
          className={`${
            pos.currentPage === pos.pagination
              ? styles.pSHidden
              : styles.pSBtnRight
          }`}
          onClick={() => {
            handleProjects({ option: pos.currentPage + 1 });
          }}
        />
      </section>
    </>
  );
};
