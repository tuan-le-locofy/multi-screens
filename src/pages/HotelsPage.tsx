import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ResultsCard1 from "../components/ResultsCard1";
import ResultsCard from "../components/ResultsCard";
import ShareYourTravelsForm from "../components/ShareYourTravelsForm";
import Footer from "../components/Footer";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className={styles.hotelsPage}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <div className={styles.fickleflightLogoWrapper}>
            <div
              className={styles.fickleflightLogo}
              onClick={onFickleflightLogoContainerClick}
            >
              <img
                className={styles.webScreenIcon}
                loading="lazy"
                alt=""
                src="/webscreen.svg"
                onClick={onWebScreenClick}
              />
            </div>
          </div>
          <img
            className={styles.hamburgerMenuIcon}
            alt=""
            src="/hamburgermenu@2x.png"
          />
          <div className={styles.frameParent}>
            <div className={styles.exploreWrapper}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
            </div>
            <div className={styles.searchWrapper}>
              <div className={styles.search} onClick={onSearchTextClick}>
                Search
              </div>
            </div>
            <div className={styles.hotelsWrapper}>
              <div className={styles.hotels}>Hotels</div>
            </div>
            <div className={styles.offersWrapper}>
              <div className={styles.offers}>Offers</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.notificationBellWrapper}>
                <img
                  className={styles.notificationBellIcon}
                  loading="lazy"
                  alt=""
                  src="/notification-bell@2x.png"
                />
              </div>
              <img
                className={styles.unsplashd1upkifd04aIcon}
                loading="lazy"
                alt=""
                src="/profile-picture@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <section className={styles.bannerWrapper}>
        <div className={styles.banner}>
          <img
            className={styles.bannerBackground}
            loading="lazy"
            alt=""
            src="/banner-background1@2x.png"
          />
          <div className={styles.title}>
            <h1 className={styles.staysInLos}>Stays in Los Angeles</h1>
            <div className={styles.options}>
              <button className={styles.pilldefault}>
                <div className={styles.beds}>Recommended</div>
              </button>
              <button className={styles.pilldefault1}>
                <div className={styles.beds1}>Price</div>
              </button>
              <button className={styles.pilldefault2}>
                <div className={styles.beds2}>Rating</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.map}>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <img className={styles.dotsIcon} alt="" src="/dots.svg" />
        <img className={styles.zoomIcon} alt="" src="/zoom@2x.png" />
      </div>
      <section className={styles.hotelsPageInner}>
        <div className={styles.frameContainer}>
          <div className={styles.resultsParent}>
            <div className={styles.results}>200+ results</div>
            <div className={styles.destinationNameInputParent}>
              <div className={styles.destinationNameInput}>
                <div className={styles.filters}>Filters</div>
              </div>
              <img
                className={styles.filtersIcon}
                loading="lazy"
                alt=""
                src="/filters.svg"
              />
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.resultsCardParent}>
              <ResultsCard1
                resultsImage="/results-image@2x.png"
                kingBedStandard="1 king bed standard"
                holidayInnExpre="Holiday Inn Expre..."
              />
              <ResultsCard
                resultsImage="/results-image-1@2x.png"
                bedInQuad="Bed in Quad"
                freehandLosAngeles="Freehand Los Angeles"
                footerNavLinks="4.2"
                reviews="(1,941 reviews)"
                s198="$S 198"
              />
              <ResultsCard
                resultsImage="/results-image-2@2x.png"
                bedInQuad="1 King, City view"
                freehandLosAngeles="The Westin Bonavent..."
                footerNavLinks="4.1"
                reviews="(1,002 reviews)"
                s198="$S 289"
                propPadding="0px 0px 14.5px"
                propMinWidth="unset"
                propWidth="28.2px"
              />
              <ResultsCard1
                resultsImage="/results-image-3@2x.png"
                kingBedStandard="Deluxe King"
                holidayInnExpre="The Ritz-Carlton, L..."
              />
            </div>
            <div className={styles.map1}>
              <img className={styles.mapIcon1} alt="" src="/map-1@2x.png" />
              <div className={styles.wrapperDots}>
                <img className={styles.dotsIcon1} alt="" src="/dots-1.svg" />
              </div>
              <div className={styles.wrapperZoom}>
                <img className={styles.zoomIcon1} alt="" src="/zoom-1@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.newsletterFormSection}>
        <img
          className={styles.newsletterSectionBackground}
          alt=""
          src="/newsletter-section-background1@2x.png"
        />
        <ShareYourTravelsForm
          arrowDropDown="pending_I6816:37361;6626:50985"
          arrowDropDown1="pending_I6816:37369;6626:50985"
        />
      </section>
      <Footer
        propDebugCommit="unset"
        propPadding="unset"
        propDebugCommit1="unset"
        propDebugCommit2="unset"
        propPadding1="unset"
        propDebugCommit3="unset"
        propDebugCommit4="unset"
        propPadding2="unset"
        propDebugCommit5="unset"
        propDebugCommit6="unset"
      />
    </div>
  );
};

export default HotelsPage;
