import React, { useState, useEffect } from "react";

export default function Go() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", ShowButtonClick);
    return () => {
      window.removeEventListener("scroll", ShowButtonClick);
    };
  }, []);
  return (
    <>
      {showButton && (
        <div>
          <button onClick={scrollToTop} type="button">
            Top
          </button>
        </div>
      )}
    </>
  );
}
