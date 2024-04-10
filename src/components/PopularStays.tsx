import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import HotelCard from "./HotelCard";
import styles from "./PopularStays.module.css";

const PopularStays: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.popularStays}>
        <div className={styles.nestedList}>
          <h2 className={styles.popularStays1}>Popular Stays</h2>
          <div className={styles.containerDivider}>
            <div
              className={styles.viewAllStaysButton}
              onClick={onViewAllStaysButtonClick}
            >
              <div className={styles.viewAllStays}>View all stays</div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/arrowright-4.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.hotelCards}>
          <HotelCard
            matterhornSuitesImage="/matterhorn-suites-image@2x.png"
            entireBungalow="Entire bungalow"
            matterhornSuites="Matterhorn Suites"
            night="$575/night"
            badgeBunch="4.9"
            reviews="(60 reviews)"
          />
          <div className={styles.hotelCard2}>
            <div className={styles.hotelCard}>
              <img
                className={styles.discoveryShoresImage}
                loading="lazy"
                alt=""
                src="/discovery-shores-image@2x.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.storyBeachfrontSuiteParent}>
                  <div className={styles.storyBeachfrontSuite}>
                    2-Story beachfront suite
                  </div>
                  <img
                    className={styles.videoIcon}
                    alt=""
                    src="/video.svg"
                    onClick={openMatterhornPopup}
                  />
                </div>
                <div className={styles.discoveryShoresWrapper}>
                  <h3 className={styles.discoveryShores}>Discovery Shores</h3>
                </div>
                <div className={styles.night}>$360/night</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/tool-tip-trio.svg"
                  />
                  <div className={styles.div}>4.8</div>
                </div>
                <div className={styles.reviews}>(116 reviews)</div>
              </div>
              <button className={styles.moreDetailsButton}>
                <div className={styles.button}>More details</div>
              </button>
            </div>
          </div>
          <div className={styles.hotelCard3}>
            <div className={styles.hotelCard1}>
              <img
                className={styles.arcticHutImage}
                loading="lazy"
                alt=""
                src="/arctic-hut-image@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.singleDeluxeHutParent}>
                  <div className={styles.singleDeluxeHut}>
                    Single deluxe hut
                  </div>
                  <img
                    className={styles.videoIcon1}
                    alt=""
                    src="/video.svg"
                    onClick={openMatterhornPopup1}
                  />
                </div>
                <div className={styles.arcticHutParent}>
                  <h3 className={styles.arcticHut}>{`Arctic Hut `}</h3>
                  <div className={styles.night1}>$420/night</div>
                </div>
                <div className={styles.rangeSliderSetParent}>
                  <div className={styles.rangeSliderSet}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className={styles.radioButtonRow}>4.7</div>
                  </div>
                  <div className={styles.reviews1}>(78 reviews)</div>
                </div>
                <button className={styles.moreDetailsButton1}>
                  <div className={styles.button1}>More details</div>
                </button>
              </div>
            </div>
          </div>
          <HotelCard
            matterhornSuitesImage="/lake-louise-image@2x.png"
            entireBungalow="Deluxe King Room"
            matterhornSuites="Lake Louise Inn"
            night="$244/night"
            badgeBunch="4.6"
            reviews="(63 reviews)"
            propBorder="1px solid var(--color-lavender-100)"
          />
        </div>
        <div className={styles.mobileViewAllStays}>
          <div className={styles.viewAllStays1}>View all stays</div>
          <img
            className={styles.arrowRightIcon1}
            alt=""
            src="/arrowright-4.svg"
          />
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
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default PopularStays;
