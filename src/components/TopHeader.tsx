import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TopHeader.module.css";

export type TopHeaderType = {
  /** Style props */
  searchColor?: CSSProperties["color"];
  hotelsColor?: CSSProperties["color"];

  /** Action props */
  onFickleflightLogoContainerClick?: () => void;
  onExploreTextClick?: () => void;
  onSearchTextClick?: () => void;
  onHotelsTextClick?: () => void;
};

const TopHeader: FunctionComponent<TopHeaderType> = ({
  searchColor,
  hotelsColor,
  onFickleflightLogoContainerClick,
  onExploreTextClick,
  onSearchTextClick,
  onHotelsTextClick,
}) => {
  const exploreStyle: CSSProperties = useMemo(() => {
    return {
      color: searchColor,
    };
  }, [searchColor]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      color: hotelsColor,
    };
  }, [hotelsColor]);

  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <div className={styles.fickleflightLogoWrapper}>
          <div className={styles.fickleflightLogo}>
            <img
              className={styles.symbolsIcon}
              loading="lazy"
              alt=""
              src="/symbols.svg"
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
            <div
              className={styles.explore}
              style={exploreStyle}
              onClick={onExploreTextClick}
            >
              Explore
            </div>
          </div>
          <div className={styles.searchWrapper}>
            <div
              className={styles.search}
              onClick={onSearchTextClick}
              style={searchStyle}
            >
              Search
            </div>
          </div>
          <div className={styles.hotelsWrapper}>
            <div className={styles.hotels} onClick={onHotelsTextClick}>
              Hotels
            </div>
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
              className={styles.profilePictureIcon}
              loading="lazy"
              alt=""
              src="/profile-picture@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
