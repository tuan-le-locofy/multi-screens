import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import styles from "./HotelCard.module.css";

export type HotelCardType = {
  matterhornSuitesImage?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  badgeBunch?: string;
  reviews?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  matterhornSuitesImage,
  entireBungalow,
  matterhornSuites,
  night,
  badgeBunch,
  reviews,
  propBorder,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const moreDetailsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelCard1}>
        <div className={styles.hotelCard}>
          <img
            className={styles.matterhornSuitesImage}
            loading="lazy"
            alt=""
            src={matterhornSuitesImage}
          />
          <div className={styles.sliderRange}>
            <div className={styles.tableTrio}>
              <div className={styles.stepperSet}>
                <div className={styles.entireBungalow}>{entireBungalow}</div>
                <img
                  className={styles.videoIcon}
                  loading="lazy"
                  alt=""
                  src="/video.svg"
                  onClick={openMatterhornPopup}
                />
              </div>
              <h3 className={styles.matterhornSuites}>{matterhornSuites}</h3>
            </div>
            <div className={styles.night}>{night}</div>
          </div>
          <div className={styles.slideShowSeries}>
            <div className={styles.modalBoxes}>
              <img
                className={styles.toolTipTrio}
                alt=""
                src="/tool-tip-trio.svg"
              />
              <div className={styles.badgeBunch}>{badgeBunch}</div>
            </div>
            <div className={styles.reviews}>{reviews}</div>
          </div>
          <button
            className={styles.moreDetailsButton}
            style={moreDetailsButtonStyle}
          >
            <div className={styles.button}>More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCard;
