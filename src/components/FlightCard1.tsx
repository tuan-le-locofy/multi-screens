import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FlightCard1.module.css";

export type FlightCard1Type = {
  turkish?: string;
  singaporeAirlines?: string;
  aM?: string;
  h55MNonStop?: string;
  aM1?: string;
  s730?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propMinWidth1?: CSSProperties["minWidth"];
  propAlignSelf2?: CSSProperties["alignSelf"];
};

const FlightCard1: FunctionComponent<FlightCard1Type> = ({
  turkish,
  singaporeAirlines,
  aM,
  h55MNonStop,
  aM1,
  s730,
  propWidth,
  propPadding,
  propAlignSelf,
  propMinWidth,
  propWidth1,
  propAlignSelf1,
  propMinWidth1,
  propAlignSelf2,
}) => {
  const valueCalculatorStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const airlineSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const singaporeAirlinesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const errorHandlerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const linkConnectorStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const aMStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf2,
    };
  }, [propMinWidth1, propAlignSelf2]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.valueCalculator} style={valueCalculatorStyle}>
        <div className={styles.airlineSection} style={airlineSectionStyle}>
          <img
            className={styles.turkishIcon}
            loading="lazy"
            alt=""
            src={turkish}
          />
          <div className={styles.dataFilter}>
            <div
              className={styles.singaporeAirlines}
              style={singaporeAirlinesStyle}
            >
              {singaporeAirlines}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.numberTransformer}>
        <div className={styles.flightDetailsSection}>
          <div className={styles.errorHandler} style={errorHandlerStyle}>
            <div className={styles.linkConnector} style={linkConnectorStyle}>
              <div className={styles.am} style={aMStyle}>
                {aM}
              </div>
              <div className={styles.sin}>SIN</div>
            </div>
          </div>
          <div className={styles.colorAdjustmentParent}>
            <div className={styles.colorAdjustment}>
              <img
                className={styles.flighticon}
                loading="lazy"
                alt=""
                src="/flighticon.svg"
              />
            </div>
            <div className={styles.h55mNonStop}>{h55MNonStop}</div>
          </div>
          <div className={styles.fontSizePickerWrapper}>
            <div className={styles.fontSizePicker}>
              <div className={styles.am1}>{aM1}</div>
              <div className={styles.sinWrapper}>
                <div className={styles.sin1}>LAX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shapeEffectsManagerParent}>
        <img
          className={styles.shapeEffectsManager}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <b className={styles.s730}>{s730}</b>
      </div>
    </div>
  );
};

export default FlightCard1;
