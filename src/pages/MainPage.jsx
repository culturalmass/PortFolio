import { Navbar, Banner, Skills, Footer } from "./";
import { Projects } from "./Projects";
import styles from "../styles";

export const MainPage = () => {
  return (
    <div className={styles.mPBg}>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};
