import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { SiFlutter } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleClick = (event) => {
    if (event.currentTarget.style.backgroundColor) {
      event.currentTarget.style.backgroundColor = null;
      event.currentTarget.style.color = null;
    } else {
      event.currentTarget.style.backgroundColor = "blue";
      event.currentTarget.style.color = "white";
    }

    event.currentTarget.classList.toggle("selectBtn", "selectBtn2");
  };

  return (
    <>
      <div className={styles.img}>
        <img src="https://wobot.ai/wobot_logo_blue.svg" alt="" />
      </div>

      {/* Card Container */}
      <div className={styles.bgContainer}>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={styles.cardCenter}
        >
          <div className={styles.cardComponent}>
            <div className={styles.centerPara}>
              <SiFlutter className={styles.svgP} size={40} />
              <h2>It's a delight to have you onboard</h2>
              <p>Help us know you better.</p>
              <p>(This is how we optimize Wobot as per your buisness needs)</p>
            </div>

            {/* Inputs and Labels */}
            <div className={styles.inputs}>
              <label>Company name:</label>
              <input type="text" placeholder="e.g. Example Inc" />

              <label>Industry</label>
              <select id="industry" name="industry">
                <option value="Select">Select</option>
                <option value="It">IT</option>
                <option value="It">IT</option>
                <option value="It">IT</option>
                <option value="It">IT</option>
              </select>
              <label>Company Size</label>
            </div>

            {/* Button for selection */}

            <div className={styles.selectComp}>
              <button onClick={handleClick} className={styles.selectBtn}>
                1-20
              </button>
              <button onClick={handleClick} className={styles.selectBtn}>
                21-50
              </button>
              <button onClick={handleClick} className={styles.selectBtn}>
                51-200
              </button>
              <button onClick={handleClick} className={styles.selectBtn}>
                201-500
              </button>
              <button onClick={handleClick} className={styles.selectBtn}>
                500+
              </button>
            </div>

            {/* Main Button */}
            <div className={styles.mainBtn}>
              <button className={styles.primeBtn}>Get Started</button>
            </div>
          </div>

          <div className={styles.footer}>
            <p>Terms of Use</p>
            <p>|</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
