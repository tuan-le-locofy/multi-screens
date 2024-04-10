import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from "./TopHeader";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <section className={styles.topHeaderParent}>
      <TopHeader
        onSearchTextClick={onSearchTextClick}
        onHotelsTextClick={onHotelsTextClick}
      />
      <div className={styles.searchSection}>
        <div className={styles.bannerGradient} />
        <img
          className={styles.bannerBackground}
          alt=""
          src="/banner--background@2x.png"
        />
        <div className={styles.searchContainer}>
          <div className={styles.letsExploreTravelTheWorParent}>
            <h1
              className={styles.letsExplore}
            >{`Let’s explore & travel the world`}</h1>
            <h3 className={styles.findTheBest}>
              Find the best destinations and the most popular stays!
            </h3>
          </div>
          <form className={styles.searchForm}>
            <div className={styles.searchFormInner}>
              <div className={styles.frameParent}>
                <div className={styles.searchFlightsWrapper}>
                  <b className={styles.searchFlights}>Search flights</b>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.paddingParent}>
                    <div className={styles.padding}>
                      <input
                        className={styles.radiobuttonunchecked}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className={styles.labelWrapper}>
                      <div className={styles.label}>Return</div>
                    </div>
                  </div>
                  <div className={styles.paddingGroup}>
                    <div className={styles.padding1}>
                      <input
                        className={styles.radiobuttonchecked}
                        checked={true}
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className={styles.labelContainer}>
                      <div className={styles.label1}>One-way</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formInputsRow}>
              <div className={styles.inputsRow}>
                <div className={styles.departureField}>
                  <div className={styles.input}>
                    <div className={styles.labelContainer1}>
                      <div className={styles.departure}>Departure</div>
                    </div>
                    <input
                      className={styles.active}
                      placeholder="Singapore (SIN)"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.arrivalField}>
                  <div className={styles.input1}>
                    <div className={styles.labelContainer2}>
                      <div className={styles.arrival}>Arrival</div>
                    </div>
                    <input
                      className={styles.active1}
                      placeholder="Los Angeles (LA)"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.selectoutlined}>
                  <div className={styles.input2}>
                    <div className={styles.labelContainer3}>
                      <div className={styles.date}>Date</div>
                    </div>
                    <div className={styles.active2}>
                      <div className={styles.muiautocompletetag}>
                        <div className={styles.chip}>
                          <div className={styles.container}>
                            <div className={styles.avatar}>
                              <div className={styles.op}>F</div>
                            </div>
                            <div className={styles.typography}>
                              <div className={styles.chip1}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon}
                              alt=""
                              src="/cancel-4.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.chip2}>
                          <div className={styles.container1}>
                            <div className={styles.avatar1}>
                              <div className={styles.op1}>F</div>
                            </div>
                            <div className={styles.typography1}>
                              <div className={styles.chip3}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon1}
                              alt=""
                              src="/cancel-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className={styles.input3}
                        placeholder="01/05/2022"
                        type="text"
                      />
                      <img className={styles.dateIcon} alt="" src="/date.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.searchFlightsButton}>
                  <div className={styles.button}>Search flights</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
