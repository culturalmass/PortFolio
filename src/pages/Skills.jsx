import { useState } from "react";
import { CustomCircleProgress } from "../componentes/CustomCircleProgress";
import { skill } from "../assets";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import styles from "../styles";

export const Skills = () => {
  const slidePagination = 3;
  const [pos, setPos] = useState({
    pos1: 0,
    pos2: 3,
    pagination: Math.ceil(skill.length / slidePagination),
    currentPage: 1,
  });

  const handleSkills = ({ option }) => {
    if (option === 0 || option > pos.pagination) {
      return;
    }
    if (option > pos.currentPage) {
      setPos({
        pos1: pos.pos1 + 3,
        pos2: pos.pos2 + 3,
        pagination: pos.pagination,
        currentPage: option,
      });
    } else if (option < pos.currentPage) {
      setPos({
        pos1: pos.pos1 - 3,
        pos2: pos.pos2 - 3,
        pagination: pos.pagination,
        currentPage: option,
      });
    }
  };

  return (
    <section className={styles.sSWrapper} id="skills">
      <div className={styles.sSBox}>
        <div className={styles.sSContainer}>
          <h1 className={styles.sSTitle}>Skills</h1>
          <p className={styles.sSMargin}>
            Reliable, Problem solver, active listener, autodidact, analytical,
            flexible and more...
          </p>
          <div className={styles.sSBtnWrapper}>
            <div
              className={`${
                pos.pos1 === 0 ? styles.pSHidden : styles.sSBtnLeft
              }`}
            >
              <IoIosArrowDropleftCircle
                className={styles.pSBtn}
                onClick={() => {
                  handleSkills({ option: pos.currentPage + -1 });
                }}
              />
            </div>
            {skill.slice(pos.pos1, pos.pos2).map((s) => (
              <CustomCircleProgress
                key={s.tittle}
                tittle={s.tittle}
                progress={s.progress}
                restStyle={s.restStyle}
                restMargin1={s.restMargin1}
                restMargin2={s.restMargin2}
              />
            ))}
            <div
              className={`${
                pos.currentPage === pos.pagination
                  ? styles.pSHidden
                  : styles.sSBtnRight
              }`}
            >
              <IoIosArrowDroprightCircle
                className={styles.pSBtn}
                onClick={() => {
                  handleSkills({ option: pos.currentPage + 1 });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
