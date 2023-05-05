import styles from "../styles";

export const CustomCircleProgress = ({
  progress,
  tittle,
  restStyle,
  restMargin1,
  restMargin2,
}) => {
  return (
    <div className={styles.flexCenter}>
      <div className={`${restMargin1} ${styles.cCPWrapper} ${restStyle}`} />
      <span className={styles.cCPNumber}>{progress}</span>
      <span className={`${styles.cCPInfo} ${restMargin2}`}>{tittle}</span>
    </div>
  );
};
