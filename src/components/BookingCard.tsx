import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BookingCard.module.css";

export type BookingCardType = {
  airlineLogo?: string;
  singaporeAirlines?: string;
  price?: string;
  depCode?: string;
  depName?: string;
  arrCode?: string;
  arrName?: string;
  flightClass?: string;
  numPeople?: string;
  expedia?: string;
  timeAgo?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
  propMinWidth4?: CSSProperties["minWidth"];
  propMinWidth5?: CSSProperties["minWidth"];
  propMinWidth6?: CSSProperties["minWidth"];
};

const BookingCard: FunctionComponent<BookingCardType> = ({
  airlineLogo,
  singaporeAirlines,
  price,
  depCode,
  depName,
  arrCode,
  arrName,
  flightClass,
  numPeople,
  expedia,
  timeAgo,
  propMinWidth,
  propWidth,
  propFlex,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
  propMinWidth5,
  propMinWidth6,
}) => {
  const singaporeAirlines2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const departure1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const depCodeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const depNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const arrCodeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const arrNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const flightClassStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth5,
    };
  }, [propMinWidth5]);

  const providerStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  return (
    <div className={styles.bookingCard}>
      <div className={styles.airlinePrice}>
        <div className={styles.airline}>
          <img
            className={styles.airlinelogoIcon}
            loading="lazy"
            alt=""
            src={airlineLogo}
          />
          <div
            className={styles.singaporeAirlines}
            style={singaporeAirlines2Style}
          >
            {singaporeAirlines}
          </div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.locations}>
        <div className={styles.departure} style={departure1Style}>
          <div className={styles.depcode} style={depCodeStyle}>
            {depCode}
          </div>
          <div className={styles.depname} style={depNameStyle}>
            {depName}
          </div>
        </div>
        <img className={styles.flightIcon} alt="" src="/flight-icon.svg" />
        <div className={styles.arrival}>
          <div className={styles.arrcode} style={arrCodeStyle}>
            {arrCode}
          </div>
          <div className={styles.arrname} style={arrNameStyle}>
            {arrName}
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/class-icon.svg" />
          <div className={styles.flightclass} style={flightClassStyle}>
            {flightClass}
          </div>
        </div>
        <div className={styles.calenderParent}>
          <img className={styles.calenderIcon} alt="" src="/calender.svg" />
          <div className={styles.numpeople}>{numPeople}</div>
        </div>
      </div>
      <div className={styles.provider}>
        <div className={styles.provider1} style={providerStyle}>
          <span>{`Booked on `}</span>
          <span className={styles.expedia}>{expedia}</span>
        </div>
        <div className={styles.timeago}>{timeAgo}</div>
      </div>
    </div>
  );
};

export default BookingCard;
