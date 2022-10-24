import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function CloseLottie() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../img/json/close.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="App" style={{ width: "150px" }}>
      <div
        ref={container}
        onMouseEnter={() => lottie.play()}
        onMouseLeave={() => lottie.pause()}
      />
    </div>
  );
}

export default CloseLottie;
