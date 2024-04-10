import { FunctionComponent } from "react";
import styles from "./ResultsCard1.module.css";

export type ResultsCard1Type = {
  resultsImage?: string;
  kingBedStandard?: string;
  holidayInnExpre?: string;
};

const ResultsCard1: FunctionComponent<ResultsCard1Type> = ({
  resultsImage,
  kingBedStandard,
  holidayInnExpre,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img
        className={styles.resultsImageIcon}
        loading="lazy"
        alt=""
        src={resultsImage}
      />
      <div className={styles.resultsCardInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.kingBedStandardParent}>
              <div className={styles.kingBedStandard}>{kingBedStandard}</div>
              <img
                className={styles.videoIcon}
                loading="lazy"
                alt=""
                src="/video1.svg"
              />
            </div>
            <div className={styles.holidayInnExpreParent}>
              <h3 className={styles.holidayInnExpre}>{holidayInnExpre}</h3>
              <div className={styles.headerBannerContainer}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.registrationInputBoxes}>4.7</div>
                <div className={styles.reviews}>(1,136 reviews)</div>
              </div>
            </div>
          </div>
          <div className={styles.contactDetailsRegistration}>
            <div className={styles.s286Parent}>
              <b className={styles.s286}>$S 286</b>
              <div className={styles.topContainer}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <button className={styles.viewDetailsButton}>
              <div className={styles.viewDetailsButtonChild} />
              <div className={styles.searchFlights}>View Details</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard1;
