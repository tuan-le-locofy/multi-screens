import { FunctionComponent } from "react";
import styles from "./MatterhornPopup.module.css";

export type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.matterhornPopup}>
      <section className={styles.video}>
        <div className={styles.thumbnailHolder}>
          <img
            className={styles.videoThumbnailIcon}
            alt=""
            src="/video-thumbnail@2x.png"
          />
          <div className={styles.videoBorder} />
        </div>
        <img
          className={styles.playIcon}
          loading="lazy"
          alt=""
          src="/play-icon.svg"
        />
      </section>
    </div>
  );
};

export default MatterhornPopup;
