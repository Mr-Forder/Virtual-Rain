import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function LottieLogo() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: require("../img/json/menu.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="App" style={{ width: "50px" }}>
      <div
        ref={container}
        onMouseEnter={() => lottie.play()}
        onMouseLeave={() => lottie.pause()}
      />
    </div>
  );
}

export default LottieLogo;
