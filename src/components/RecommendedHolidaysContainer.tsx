import { FunctionComponent } from "react";
import RecCard from "./RecCard";
import styles from "./RecommendedHolidaysContainer.module.css";

const RecommendedHolidaysContainer: FunctionComponent = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <h2 className={styles.recommendedHolidays}>Recommended Holidays</h2>
        <div className={styles.viewAllHolidaysParent}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright-2.svg"
          />
        </div>
      </div>
      <div className={styles.recCardsContainer}>
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          dataAggregator="$899"
        />
        <RecCard
          unsplash5MV818tzxeo="/switzerlandimage@2x.png"
          bali="Swiss"
          d3N="6D5N"
          dataAggregator="$900"
        />
        <RecCard
          unsplash5MV818tzxeo="/boracayimage@2x.png"
          bali="Boracay"
          d3N="5D4N"
          dataAggregator="$699"
        />
        <RecCard
          unsplash5MV818tzxeo="/palawanimage@2x.png"
          bali="Palawan"
          d3N="4D3N"
          dataAggregator="$789"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img
          className={styles.arrowRightIcon1}
          alt=""
          src="/arrowright-2.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
