import { FunctionComponent } from "react";
import FlightCard1 from "./FlightCard1";
import FlightCard from "./FlightCard";
import BookingCard from "./BookingCard";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.resultsParent}>
          <div className={styles.results}>10 out of 177 Results</div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/vector-21.svg"
          />
        </div>
        <div className={styles.resultsGroup}>
          <h3 className={styles.results1}>Stops</h3>
          <div className={styles.frameContainer}>
            <div className={styles.component1Parent}>
              <input className={styles.component1} type="checkbox" />
              <div className={styles.results2}>1 Stop</div>
            </div>
            <div className={styles.component1Group}>
              <input className={styles.component11} type="checkbox" />
              <div className={styles.results3}>2 Stops</div>
            </div>
          </div>
        </div>
        <div className={styles.resultsContainer}>
          <h3 className={styles.results4}>Booking Options</h3>
          <div className={styles.frameDiv}>
            <div className={styles.component1Container}>
              <input className={styles.component12} type="checkbox" />
              <div className={styles.results5}>Book on Fickleflight</div>
            </div>
            <div className={styles.component1Parent1}>
              <input className={styles.component13} type="checkbox" />
              <div className={styles.results6}>Official Airline Websites</div>
            </div>
          </div>
        </div>
        <div className={styles.resultsParent1}>
          <h3 className={styles.results7}>Flight Experience</h3>
          <div className={styles.frameParent1}>
            <div className={styles.component1Parent2}>
              <input className={styles.component14} type="checkbox" />
              <div className={styles.results8}>No overnight flights</div>
            </div>
            <div className={styles.component1Parent3}>
              <input className={styles.component15} type="checkbox" />
              <div className={styles.results9}>No long stop-overs</div>
            </div>
          </div>
        </div>
        <img className={styles.seperatorIcon} alt="" src="/vector-21.svg" />
        <div className={styles.resultsParent2}>
          <h3 className={styles.results10}>Airlines</h3>
          <div className={styles.frameParent2}>
            <div className={styles.component1Parent4}>
              <input className={styles.component16} type="checkbox" />
              <div className={styles.results11}>Singapore Airlines</div>
            </div>
            <div className={styles.component1Parent5}>
              <input className={styles.component17} type="checkbox" />
              <div className={styles.results12}>Qatar Airways</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dataAggregator}>
        <div className={styles.flightCards}>
          <div className={styles.results13}>10 out of 177 Results</div>
          <FlightCard1
            turkish="/turkish.svg"
            singaporeAirlines="Turkish Airlines"
            aM="11:35 PM"
            h55MNonStop="33H 10M, 1-stop"
            aM1="4:45 PM"
            s730="S$ 723"
          />
          <FlightCard
            sIA="/sia.svg"
            singaporeAirlines="Singapore Airlines"
            aM="8:45 PM"
            h55MNonStop="15H 10M, 2-stops"
            aM1="7:55 PM"
            s730="S$ 900"
          />
          <FlightCard1
            turkish="/japan.svg"
            singaporeAirlines="Japan Airlines"
            aM="8:20 PM"
            h55MNonStop="17H 30M, 1-stop"
            aM1="9:50 PM"
            s730="S$ 859"
            propWidth="unset"
            propPadding="0px var(--padding-4xs) 0px 0px"
            propAlignSelf="unset"
            propMinWidth="105px"
            propWidth1="93px"
            propAlignSelf1="stretch"
            propMinWidth1="unset"
            propAlignSelf2="stretch"
          />
          <FlightCard1
            turkish="/ana.svg"
            singaporeAirlines="ANA"
            aM="6:35 PM"
            h55MNonStop="19H 15M, 1-stop"
            aM1="9:50 PM"
            s730="S$ 936"
            propWidth="155.8px"
            propPadding="unset"
            propAlignSelf="stretch"
            propMinWidth="34px"
            propWidth1="93px"
            propAlignSelf1="stretch"
            propMinWidth1="unset"
            propAlignSelf2="stretch"
          />
          <FlightCard
            sIA="/americanairlines.svg"
            singaporeAirlines="American Airlines"
            aM="8:20 PM"
            h55MNonStop="17H 30M, 1-stop"
            aM1="9:50 PM"
            s730="S$ 936"
            propRight="-16px"
            propGap="13.1px"
            propMinWidth="79px"
            propPadding="0px var(--padding-6xs-7) 0px var(--padding-6xs)"
            propMinWidth1="121px"
          />
          <FlightCard1
            turkish="/turkish.svg"
            singaporeAirlines="Turkish Airlines"
            aM="11:35 PM"
            h55MNonStop="33H 10M, 1-stop"
            aM1="4:45 PM"
            s730="S$ 673"
            propWidth="unset"
            propPadding="unset"
            propAlignSelf="unset"
            propMinWidth="114px"
            propWidth1="unset"
            propAlignSelf1="unset"
            propMinWidth1="93px"
            propAlignSelf2="unset"
          />
          <div className={styles.flightCard}>
            <div className={styles.airlineSectionWrapper}>
              <div className={styles.airlineSection}>
                <img className={styles.japanIcon} alt="" src="/japan.svg" />
                <div className={styles.singaporeAirlinesWrapper}>
                  <div className={styles.singaporeAirlines}>Japan Airlines</div>
                </div>
              </div>
            </div>
            <div className={styles.flightDetailsSectionWrapper}>
              <div className={styles.flightDetailsSection}>
                <div className={styles.flightDetailsSectionInner}>
                  <div className={styles.amParent}>
                    <div className={styles.am}>10:25 PM</div>
                    <div className={styles.sin}>SIN</div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.flighticonParent}>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className={styles.shapeTransformer}>
                      <div className={styles.am1}>9:10 AM</div>
                    </div>
                  </div>
                  <div className={styles.borderDesignerWrapper}>
                    <div className={styles.borderDesigner}>
                      <div className={styles.shadowGenerator}>
                        <div className={styles.h55mNonStop}>
                          26H 45M, 1-stop
                        </div>
                      </div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.frameItem} alt="" src="/vector-1.svg" />
              <b className={styles.s730}>S$ 859</b>
            </div>
          </div>
          <button className={styles.primaryButton}>
            <div className={styles.pathManipulator} />
            <div className={styles.searchFlights}>Show more results</div>
          </button>
        </div>
      </div>
      <div className={styles.recentlyBooked}>
        <div className={styles.recentlyBookedTitle}>
          <b className={styles.results14}>Recently booked</b>
          <img
            className={styles.triangleCreatorIcon}
            alt=""
            src="/vector-2-1.svg"
          />
        </div>
        <div className={styles.bookingCards}>
          <BookingCard
            airlineLogo="/airlinelogo@2x.png"
            singaporeAirlines="Singapore Airlines"
            price="$1128"
            depCode="SIN"
            depName="Singapore"
            arrCode="LAX"
            arrName="Los Angeles"
            flightClass="Economy"
            numPeople="2 Adults"
            expedia="Expedia"
            timeAgo="1s ago!"
          />
          <BookingCard
            airlineLogo="/icon@2x.png"
            singaporeAirlines="American Airlines"
            price="$1024"
            depCode="SFO"
            depName="San Francisco"
            arrCode="SIN"
            arrName="Singapore"
            flightClass="First Class"
            numPeople="1 Adults"
            expedia="Kayak"
            timeAgo="2s ago!"
            propMinWidth="99px"
            propWidth="unset"
            propFlex="unset"
            propMinWidth1="33px"
            propMinWidth2="80px"
            propMinWidth3="27px"
            propMinWidth4="58px"
            propMinWidth5="60px"
            propMinWidth6="98px"
          />
          <div className={styles.bookingCard}>
            <div className={styles.airlinePrice}>
              <div className={styles.airline}>
                <img className={styles.icon} alt="" src="/icon-1@2x.png" />
                <div className={styles.japanAirlines}>Japan Airlines</div>
              </div>
              <div className={styles.div}>$2996</div>
            </div>
            <div className={styles.locations}>
              <div className={styles.departure}>
                <div className={styles.phx}>PHX</div>
                <div className={styles.phoenix}>Phoenix</div>
              </div>
              <img
                className={styles.flightIcon}
                alt=""
                src="/flight-icon.svg"
              />
              <div className={styles.arrival}>
                <div className={styles.dxb}>DXB</div>
                <div className={styles.dubai}>Dubai</div>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.class}>
                <img
                  className={styles.classIcon}
                  alt=""
                  src="/class-icon.svg"
                />
                <div className={styles.economy}>Economy</div>
              </div>
              <div className={styles.calenderParent}>
                <img
                  className={styles.calenderIcon}
                  alt=""
                  src="/calender.svg"
                />
                <div className={styles.adults}>3 Adults</div>
              </div>
            </div>
            <div className={styles.provider}>
              <div className={styles.bookedOnSkyscannerContainer}>
                <span>{`Booked on `}</span>
                <span className={styles.skyscanner}>Skyscanner</span>
              </div>
              <div className={styles.sAgo}>3s ago!</div>
            </div>
          </div>
          <div className={styles.showMore}>
            <div className={styles.showMore1}>Show more</div>
            <img className={styles.iconBack} alt="" src="/icon--back@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
