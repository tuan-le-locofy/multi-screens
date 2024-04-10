import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import TripMenus from "../components/TripMenus";
import FrameComponent from "../components/FrameComponent";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStays from "../components/PopularStays";
import ProgressBarQuartet from "../components/ProgressBarQuartet";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <FrameComponent2 />
      <section className={styles.homeContents}>
        <div className={styles.recentSearchesParent}>
          <b className={styles.recentSearches}>Recent Searches</b>
          <FrameComponent1 />
          <TripMenus />
        </div>
        <FrameComponent />
        <div className={styles.viewAllBottom}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </div>
        <RecommendedHolidaysContainer />
        <PopularStays />
      </section>
      <ProgressBarQuartet />
    </div>
  );
};

export default Homepage;
