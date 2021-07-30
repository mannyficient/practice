import React from "react";
import lottie from "lottie-web";
import Loading from "../lottie.json";
import "./loading.css";

export default function LoadingAnimation(props) {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#loading-animation"),
      animationData: Loading,
      renderer: "svg",
    });
  }, []);

  return (
    <div>
      <div id='loading-animation'>
        <div id='loading-text'>{props.message}</div>
      </div>
    </div>
  );
}

LoadingAnimation.defaultProps = {
  message: "Loading...",
};
