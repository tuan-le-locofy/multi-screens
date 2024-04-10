import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightMainContainer.module.css";

export type FlightMainContainerType = {
  sIN?: string;
  lAX?: string;
  departOn?: string;
  sep2021?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FlightMainContainer: FunctionComponent<FlightMainContainerType> = ({
  sIN,
  lAX,
  departOn,
  sep2021,
  propMarginLeft,
  propMinWidth,
}) => {
  const flightMainContainerStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const lAXStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={styles.flightMainContainer}
      style={flightMainContainerStyle}
    >
      <div className={styles.toAndFrom}>
        <h3 className={styles.sin}>{sIN}</h3>
        <div className={styles.dataAggregator}>
          <img className={styles.durationIcon} alt="" src="/duration.svg" />
        </div>
        <h3 className={styles.lax} style={lAXStyle}>
          {lAX}
        </h3>
      </div>
      <div className={styles.container}>
        <div className={styles.departOn7Container}>
          <b>{departOn}</b>
          <span>{sep2021}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightMainContainer;
