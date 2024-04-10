import { FunctionComponent } from "react";
import InputGroup from "./InputGroup";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.searchFormSectionWrapper}>
      <div className={styles.searchFormSection}>
        <div className={styles.searchContainer}>
          <div className={styles.bannerGradient} />
          <img
            className={styles.bannerBackgroundIcon}
            alt=""
            src="/banner-background@2x.png"
          />
          <div className={styles.searchSection}>
            <div className={styles.title}>
              <h1 className={styles.whereAreYou}>Where are you off too?</h1>
            </div>
            <form className={styles.searchForm}>
              <div className={styles.inputsRow}>
                <InputGroup
                  departure="Departure"
                  activePlaceholder="Singapore (SIN)"
                />
                <InputGroup
                  departure="Arrival"
                  activePlaceholder="Los Angeles (LA)"
                  propWidth="43px"
                  propMinWidth="36px"
                />
                <div className={styles.inputGroup}>
                  <div className={styles.dateField}>
                    <div className={styles.input}>
                      <div className={styles.labelContainer}>
                        <div className={styles.date}>Date</div>
                      </div>
                      <div className={styles.active}>
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
                          className={styles.input1}
                          placeholder="01/05/2022"
                          type="text"
                        />
                        <img
                          className={styles.dateIcon}
                          alt=""
                          src="/date.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.searchFlightsButton}>
                  <div className={styles.button}>Search flights</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
