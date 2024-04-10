import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightCard.module.css";

export type FlightCardType = {
  sIA?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FlightCard: FunctionComponent<FlightCardType> = ({
  sIA,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propRight,
  propGap,
  propMinWidth,
  propPadding,
  propMinWidth1,
}) => {
  const singaporeAirlines1Style: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const flightDetailsSectionStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const h55MNonStopStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSectionWrapper}>
        <div className={styles.airlineSection}>
          <img className={styles.siaIcon} loading="lazy" alt="" src={sIA} />
          <div
            className={styles.singaporeAirlines}
            style={singaporeAirlines1Style}
          >
            {singaporeAirlines}
          </div>
        </div>
      </div>
      <div className={styles.flightDetailsSectionWrapper}>
        <div
          className={styles.flightDetailsSection}
          style={flightDetailsSectionStyle}
        >
          <div className={styles.flightDetailsSectionInner}>
            <div className={styles.amParent}>
              <div className={styles.am}>{aM}</div>
              <div className={styles.sin}>SIN</div>
            </div>
          </div>
          <div className={styles.frameParent} style={frameDiv2Style}>
            <div className={styles.flighticonWrapper} style={frameDiv3Style}>
              <img className={styles.flighticon} alt="" src="/flighticon.svg" />
            </div>
            <div className={styles.h55mNonStop} style={h55MNonStopStyle}>
              {h55MNonStop}
            </div>
          </div>
          <div className={styles.flightDetailsSectionChild}>
            <div className={styles.amGroup}>
              <div className={styles.am1}>{aM1}</div>
              <div className={styles.sinWrapper}>
                <div className={styles.sin1}>LAX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/vector-1.svg" />
        <b className={styles.s730}>{s730}</b>
      </div>
    </div>
  );
};

export default FlightCard;
