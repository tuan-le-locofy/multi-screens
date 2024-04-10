import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.planYourNextTripParent}>
        <b className={styles.planYourNext}>Plan your next trip</b>
        <div className={styles.frameGroup}>
          <div className={styles.mostPopularDestinationsWrapper}>
            <h2 className={styles.mostPopularDestinations}>
              Most Popular Destinations
            </h2>
          </div>
          <div className={styles.viewAllTop}>
            <div className={styles.viewAllDestinations}>
              View all destinations
            </div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.col1}>
          <div className={styles.pariscard}>
            <img
              className={styles.parisimageIcon}
              loading="lazy"
              alt=""
              src="/parisimage@2x.png"
            />
            <div className={styles.parisParent}>
              <b className={styles.paris}>Paris</b>
              <div className={styles.from}>from</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>$699</div>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.greececard}>
            <img
              className={styles.greeceimageIcon}
              loading="lazy"
              alt=""
              src="/greeceimage@2x.png"
            />
            <div className={styles.greeceParent}>
              <b className={styles.greece}>Greece</b>
              <div className={styles.from1}>from</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div1}>$1079</div>
            </div>
          </div>
        </div>
        <div className={styles.col3}>
          <div className={styles.norwaycard}>
            <img
              className={styles.norwayimageIcon}
              loading="lazy"
              alt=""
              src="/norwayimage@2x.png"
            />
            <div className={styles.norwayParent}>
              <b className={styles.norway}>Norway</b>
              <div className={styles.from2}>from</div>
            </div>
            <div className={styles.frame}>
              <div className={styles.div2}>$895</div>
            </div>
          </div>
        </div>
        <div className={styles.col4}>
          <div className={styles.tuscanycard}>
            <img
              className={styles.tuscanyimageIcon}
              loading="lazy"
              alt=""
              src="/tuscanyimage@2x.png"
            />
            <div className={styles.tuscanyParent}>
              <b className={styles.tuscany}>Tuscany</b>
              <div className={styles.from3}>from</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.div3}>$1245</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
