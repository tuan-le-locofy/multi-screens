import { FunctionComponent } from "react";
import ShareYourTravelsForm from "./ShareYourTravelsForm";
import Footer from "./Footer";
import styles from "./ProgressBarQuartet.module.css";

const ProgressBarQuartet: FunctionComponent = () => {
  return (
    <section className={styles.progressBarQuartet}>
      <div className={styles.subscribeSection}>
        <img
          className={styles.subscribeSectionBackground}
          alt=""
          src="/subscribe-section-background@2x.png"
        />
        <ShareYourTravelsForm
          arrowDropDown="pending_I6816:36713;6626:50985"
          arrowDropDown1="pending_I6816:36721;6626:50985"
        />
      </div>
      <Footer />
    </section>
  );
};

export default ProgressBarQuartet;
