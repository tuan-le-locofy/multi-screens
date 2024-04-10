import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ResultsCard.module.css";

export type ResultsCardType = {
  resultsImage?: string;
  bedInQuad?: string;
  freehandLosAngeles?: string;
  footerNavLinks?: string;
  reviews?: string;
  s198?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const ResultsCard: FunctionComponent<ResultsCardType> = ({
  resultsImage,
  bedInQuad,
  freehandLosAngeles,
  footerNavLinks,
  reviews,
  s198,
  propPadding,
  propMinWidth,
  propWidth,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const footerNavLinksStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMinWidth, propWidth]);

  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={resultsImage} />
      <div className={styles.resultsCardInner} style={frameDiv4Style}>
        <div className={styles.frameParent}>
          <div className={styles.bedInQuadParent}>
            <div className={styles.bedInQuad}>{bedInQuad}</div>
            <h3 className={styles.freehandLosAngeles}>{freehandLosAngeles}</h3>
            <div className={styles.sortingOptionsPicker}>
              <img
                className={styles.socialMediaLogoRow}
                alt=""
                src="/vector-11.svg"
              />
              <div
                className={styles.footerNavLinks}
                style={footerNavLinksStyle}
              >
                {footerNavLinks}
              </div>
              <div className={styles.reviews}>{reviews}</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.s198Parent}>
              <b className={styles.s198}>{s198}</b>
              <div className={styles.nightWrapper}>
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

export default ResultsCard;
