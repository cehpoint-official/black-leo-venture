import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Starting.module.css";

const Starting = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [showMessage2, setShowMessage2] = useState(false);
  const [showMessage3, setShowMessage3] = useState(false);
  const [showMessage4, setShowMessage4] = useState(false);
  const [showMessage5, setShowMessage5] = useState(false);
  const [showMessage6, setShowMessage6] = useState(false);
  const [showMessage7, setShowMessage7] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let timeout1 = setTimeout(() => {
      setShowMessage(false); //we have nothing to show
      setShowMessage2(true); //we have something to tell - visible
    }, 4500);

    let timeout2 = setTimeout(() => {
      setShowMessage2(false); //we have something to tell - hide
      setShowMessage3(true);
    }, 9000);

    let timeout3 = setTimeout(() => {
      setShowMessage3(false);
      setShowMessage4(true);
    }, 14000);

    let timeout4 = setTimeout(() => {
      setShowMessage4(false);
      setShowMessage5(true);
    }, 16000);

    let timeout5 = setTimeout(() => {
      setShowMessage5(false);
      setShowMessage6(true);
    }, 18500);

    let timeout6 = setTimeout(() => {
      setShowMessage7(true);
    }, 21000);

    let timeout7 = setTimeout(() => {
      router.push("/");
    }, 25000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
      clearTimeout(timeout5);
      clearTimeout(timeout6);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-0 flex flex-col justify-center items-center h-screen font-lato">
      {" "}
      {showMessage && (
        // <h1 className="text-black text-6xl font-extralight py-2">
        //   We have nothing to show
        // </h1>
        <h1
          className={`${styles.fade_text} text-3xl lg:text-6xl font-extralight text-center`}
        >
          <span className={`${styles.fade_span}`}>We</span>{" "}
          {/* <br /> */}
          <span className={styles.fade_span}>have</span>{" "}
          {/* <br /> */}
          <span className={styles.fade_span}>nothing</span>{" "}
          {/* <br /> */}
          <span className={styles.fade_span}>to</span>{" "}
          {/* <br /> */}
          <span className={styles.fade_span}>show</span>
          {/* <br /> */}
        </h1>
      )}
      
        {showMessage2 && (
          <h1
          className={`${styles.fade_text} text-3xl lg:text-6xl font-extralight text-center`}
        >
          <span className={`${styles.fade_span}`}>But, </span>{" "}
          {/* <br /> */}
          <span className={styles.fade_span}>we</span>{" "}
          {/* <br /> */}
          <span className={styles.fade_span}>have</span>{" "}
          {/* <br /> */}
          <span className={`font-normal ${styles.fade_span}`}>something</span>{" "}
          {/* <br /> */}
          <span className={styles.fade_span}>to </span>{" "}
          {/* <br/>  */}
          <span className={`font-normal ${styles.fade_span}`}>tell..</span>
          {/* <br /> */}
        </h1>
        )}
      
      <div className="flex justify-start items-start w-full">
        {showMessage3 && (
          <h1
            className={`${styles.fade_text} text-5xl lg:text-8xl font-extralight text-left`}
          >
            <span className={`${styles.fade_span} pb-10`}>LIKE...</span>
            <br />
            <span className={styles.fade_span}>WE AS A</span>
            <br />
            <span className={styles.fade_span}>TEAM</span>
            <br />
            <span className={styles.fade_span}>
              OUR <span className="font-extralight">BELIEVES</span>
            </span>
            <br />
            <span className={styles.fade_span}>ARE</span>
            <br />
            <span className={styles.fade_span}>ONLY IN</span>
          </h1>
        )}
      </div>
      <div className="flex justify-between items-center">
        {showMessage4 && (
          <h1 className={`${styles.fade_text} text-5xl lg:text-7xl font-[100]`}>
            <span className={styles.fade_span}>Mankind</span>
          </h1>
        )}
      </div>
      <div className="flex justify-between items-center">
        {showMessage5 && (
          <h1 className={`${styles.fade_text} text-5xl lg:text-7xl font-[100]`}>
            <span className={`${styles.fade_span}`}>Sustainability</span>
          </h1>
        )}
      </div>
      {showMessage6 && (
        <div className="h-24">
          <h1
            className={`${styles.fade_text} text-5xl  lg:text-7xl font-[100] text-center`}
          >
            <span className={styles.fade_span}>&</span>
            <br />
            <span
              className={`${styles.fade_span} pb-2 border-b-4 border-blue-800`}
            >
              Technology
            </span>
          </h1>
          {showMessage7 && (
            <h1
              className={`${styles.fade_text} font-extralight text-center tracking-widest text-lg lg:text-2xl`}
            >
              <span className={styles.fade_span}>we</span>{" "}
              <span className={styles.fade_span}>serve</span>{" "}
              <span className={styles.fade_span}>for</span>{" "}
              <span className={styles.fade_span}>mankind</span>
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Starting;
