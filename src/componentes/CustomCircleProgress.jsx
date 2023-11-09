import styles from "../styles";

export const CustomCircleProgress = ({ progress, tittle, restStyle }) => {
  return (
    <div className={styles.cCPContainer}>
      <div className={styles.cCPProgressCircle}>
        <div className={`${styles.cCPWrapper} ${restStyle}`} />
        <span className={styles.cCPNumber}>{progress}</span>
      </div>
      <span className={styles.cCPInfo}>{tittle}</span>
    </div>
  );
};
