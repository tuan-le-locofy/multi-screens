import { FunctionComponent } from "react";
import styles from "./RecCard.module.css";

export type RecCardType = {
  unsplash5MV818tzxeo?: string;
  bali?: string;
  d3N?: string;
  dataAggregator?: string;
};

const RecCard: FunctionComponent<RecCardType> = ({
  unsplash5MV818tzxeo,
  bali,
  d3N,
  dataAggregator,
}) => {
  return (
    <div className={styles.recCard1}>
      <img
        className={styles.unsplash5mv818tzxeoIcon}
        loading="lazy"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.baliParent}>
            <div className={styles.bali}>{bali}</div>
            <div className={styles.d3n}>{d3N}</div>
          </div>
          <div className={styles.dataAggregator}>{dataAggregator}</div>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
