import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import NewsletterFormSection from "../components/NewsletterFormSection";
import Footer from "../components/Footer";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.resultsPage}>
      <TopHeader
        searchColor="#424242"
        hotelsColor="#1262af"
        onFickleflightLogoContainerClick={onFickleflightLogoContainerClick}
        onExploreTextClick={onExploreTextClick}
        onHotelsTextClick={onHotelsTextClick}
      />
      <FrameComponent4 />
      <section className={styles.resultsPageInner}>
        <FrameComponent3 />
      </section>
      <NewsletterFormSection />
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

export default ResultsPage;
