import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InputGroup.module.css";

export type InputGroupType = {
  departure?: string;
  activePlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const InputGroup: FunctionComponent<InputGroupType> = ({
  departure,
  activePlaceholder,
  propWidth,
  propMinWidth,
}) => {
  const labelContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const departureStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.inputGroup}>
      <div className={styles.departureField}>
        <div className={styles.input}>
          <div className={styles.labelContainer} style={labelContainerStyle}>
            <div className={styles.departure} style={departureStyle}>
              {departure}
            </div>
          </div>
          <input
            className={styles.active}
            placeholder={activePlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
