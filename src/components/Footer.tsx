import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  /** Style props */
  propDebugCommit?: CSSProperties["debugCommit"];
  propPadding?: CSSProperties["padding"];
  propDebugCommit1?: CSSProperties["debugCommit"];
  propDebugCommit2?: CSSProperties["debugCommit"];
  propPadding1?: CSSProperties["padding"];
  propDebugCommit3?: CSSProperties["debugCommit"];
  propDebugCommit4?: CSSProperties["debugCommit"];
  propPadding2?: CSSProperties["padding"];
  propDebugCommit5?: CSSProperties["debugCommit"];
  propDebugCommit6?: CSSProperties["debugCommit"];
};

const Footer: FunctionComponent<FooterType> = ({
  propDebugCommit,
  propPadding,
  propDebugCommit1,
  propDebugCommit2,
  propPadding1,
  propDebugCommit3,
  propDebugCommit4,
  propPadding2,
  propDebugCommit5,
  propDebugCommit6,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const companyStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const company1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const spacerStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit2,
    };
  }, [propDebugCommit2]);

  const supportStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const support1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit3,
    };
  }, [propDebugCommit3]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit4,
    };
  }, [propDebugCommit4]);

  const moreStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const more1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit5,
    };
  }, [propDebugCommit5]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit6,
    };
  }, [propDebugCommit6]);

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.fickleflightBio}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.fickleFlightIs}>
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className={styles.entypoSocialfacebookWithCiParent}>
          <img
            className={styles.entypoSocialfacebookWithCiIcon}
            loading="lazy"
            alt=""
            src="/entyposocialfacebookwithcircle.svg"
          />
          <img
            className={styles.entypoSocialinstagramWithCIcon}
            loading="lazy"
            alt=""
            src="/entyposocialinstagramwithcircle.svg"
          />
          <img
            className={styles.entypoSocialtwitterWithCirIcon}
            loading="lazy"
            alt=""
            src="/entyposocialtwitterwithcircle.svg"
          />
        </div>
      </div>
      <div className={styles.tableContainer} />
      <div className={styles.footerLinks}>
        <div className={styles.company} style={companyStyle}>
          <div className={styles.company1} style={company1Style}>
            Company
          </div>
          <div className={styles.spacer} style={spacerStyle}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.news}>News</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.howWeWork}>How we work</div>
          </div>
        </div>
        <div className={styles.support} style={supportStyle}>
          <div className={styles.support1} style={support1Style}>
            Support
          </div>
          <div className={styles.accountParent} style={frameDivStyle}>
            <div className={styles.account}>Account</div>
            <div className={styles.supportCenter}>Support Center</div>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.accessibility}>Accessibility</div>
          </div>
        </div>
        <div className={styles.more} style={moreStyle}>
          <div className={styles.more1} style={more1Style}>
            More
          </div>
          <div className={styles.covidAdvisoryParent} style={frameDiv1Style}>
            <div className={styles.covidAdvisory}>Covid Advisory</div>
            <div className={styles.airlineFees}>Airline Fees</div>
            <div className={styles.tips}>Tips</div>
            <div className={styles.quarantineRules}>Quarantine Rules</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
