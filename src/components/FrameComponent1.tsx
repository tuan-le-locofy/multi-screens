import { FunctionComponent } from "react";
import FlightMainContainer from "./FlightMainContainer";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.flightMainContainerParent}>
        <FlightMainContainer
          sIN="SIN"
          lAX="LAX"
          departOn="Depart on: "
          sep2021="7 Sep 2021"
        />
        <div className={styles.prepareForYour}>Prepare for your trip</div>
      </div>
      <FlightMainContainer
        sIN="MY"
        lAX="DUB"
        departOn="Depart on:"
        sep2021=" 9 Sep 2021"
        propMarginLeft="-632.5px"
        propMinWidth="51.3px"
      />
    </div>
  );
};

export default FrameComponent1;
