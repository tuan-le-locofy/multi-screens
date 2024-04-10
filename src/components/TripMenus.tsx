import { FunctionComponent } from "react";
import styles from "./TripMenus.module.css";

const TripMenus: FunctionComponent = () => {
  return (
    <div className={styles.tripMenus}>
      <div className={styles.hotelIconParent}>
        <img
          className={styles.hotelIcon}
          loading="lazy"
          alt=""
          src="/hotel-icon.svg"
        />
        <div className={styles.hotelWrapper}>
          <div className={styles.hotel}>Hotel</div>
        </div>
      </div>
      <div className={styles.attractions}>
        <div className={styles.attractionsIconWrapper}>
          <div className={styles.attractionsIcon}>
            <div className={styles.background} />
            <img className={styles.ticketIcon} alt="" src="/ticket.svg" />
          </div>
        </div>
        <div className={styles.attractions1}>Attractions</div>
      </div>
      <div className={styles.eatsIconParent}>
        <img
          className={styles.eatsIcon}
          loading="lazy"
          alt=""
          src="/eats-icon.svg"
        />
        <div className={styles.eatsWrapper}>
          <div className={styles.eats}>Eats</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.commuteIconWrapper}>
          <div className={styles.commuteIcon}>
            <div className={styles.background1} />
            <img className={styles.trainIcon} alt="" src="/train.svg" />
          </div>
        </div>
        <div className={styles.commute}>Commute</div>
      </div>
      <div className={styles.taxiIconParent}>
        <button className={styles.taxiIcon}>
          <div className={styles.background2} />
          <img className={styles.taxiIcon1} alt="" src="/taxi.svg" />
        </button>
        <div className={styles.taxiWrapper}>
          <div className={styles.taxi}>Taxi</div>
        </div>
      </div>
      <div className={styles.moviesIconParent}>
        <div className={styles.moviesIcon}>
          <div className={styles.background3} />
          <img className={styles.movieIcon} alt="" src="/movie.svg" />
        </div>
        <div className={styles.moviesWrapper}>
          <div className={styles.movies}>Movies</div>
        </div>
      </div>
    </div>
  );
};

export default TripMenus;
