import { useState } from "react";
import { projects } from "../assets";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import styles from "../styles";

const isSmall = window.innerWidth <= 640;

export const Projects = () => {
  const slidePagination = isSmall ? 1 : 3;
  const [pos, setPos] = useState({
    pos1: 0,
    pos2: slidePagination,
    pagination: Math.ceil(projects.length / slidePagination),
    currentPage: 1,
  });

  const handleProjects = ({ option }) => {
    if (option === 0 || option > pos.pagination) {
      return;
    }
    if (option > pos.currentPage) {
      setPos({
        pos1: pos.pos1 + slidePagination,
        pos2: pos.pos2 + slidePagination,
        pagination: pos.pagination,
        currentPage: option,
      });
    } else if (option < pos.currentPage) {
      setPos({
        pos1: pos.pos1 - slidePagination,
        pos2: pos.pos2 - slidePagination,
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
        <div className={styles.pSBox}>
          <div className={`${styles.projectsWrapper}`}>
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
          <div className={styles.pSBtnWrapper}>
            <div
              className={`${
                pos.pos1 === 0 ? styles.pSHidden : styles.pSBtnGeneral
              }`}
            >
              <IoIosArrowDropleftCircle
                className={styles.pSBtn}
                onClick={() => {
                  handleProjects({ option: pos.currentPage + -1 });
                }}
              />
            </div>
            <div
              className={`${
                pos.currentPage === pos.pagination
                  ? styles.pSHidden
                  : styles.pSBtnGeneral
              }`}
            >
              <IoIosArrowDroprightCircle
                className={styles.pSBtn}
                onClick={() => {
                  handleProjects({ option: pos.currentPage + 1 });
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
