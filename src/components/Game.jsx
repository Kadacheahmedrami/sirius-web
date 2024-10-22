"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";


const Game = ({ keyParam, value }) => {
  const [isMobile, setIsMobile] = useState(false);


  // Check for screen width to determine if it's mobile resolution
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is typically the breakpoint for mobile devices
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Get the card number based on the keyParam
  const getCardNumber = () => {
    switch (keyParam) {
      case "someKey1":
        return "Find card 1";
      case "someKey2":
        return "Find card 2";
      case "someKey3":
        return "Find card 3";
      case "someKey4":
        return "Find card 4";
      case "someKey5":
        return "Find card 5";
      case "someKey6":
        return "Find card 6";
      default:
        return "Play";
    }
  };

  // Define styles based on the value
  const getClassName = () => {
    return value === 0
      ? "spline-card z-0 flex-col-reverse w-[100%] h-[265px] md:h-auto md:w-full bg-white border-4 rounded flex items-center justify-center transition duration-300"
      : "z-0 flex-col-reverse cursor-default w-[100%] h-[265px] md:h-auto md:w-full bg-gray-300 border-4 rounded flex items-center justify-center opacity-70";
  };

  // Handle click event to navigate to /game and pass keyParam
  const handleClick = (e) => {
    if (value !== 0) {
      e.preventDefault();
    } else {
      router.push(`/game?keyParam=${keyParam}`); // Navigate to /game with keyParam as a query parameter
    }
  };

  return (
    <a draggable="false" href={value === 0 ? `/game?keyParam=${keyParam}` : "#"} onClick={handleClick}>
      <div id="start" className={getClassName()}>
        <div
          className="play"
          style={{
            textDecoration: value !== 0 ? "line-through" : "none",
            fontWeight: value !== 0 ? "normal" : "bold",
          }}
        >
          {value === 0 ? getCardNumber() : "Closed"}
        </div>

        {/* Conditional rendering: Show image on mobile, Spline Viewer on larger screens */}
        {isMobile ? (
          <Image alt="Sirius" src={"/sirius.png"} height={50} width={325} />
        ) : (
          <spline-viewer
            url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode"
            className="z-0"
            camera-controls="zoom: false"
          ></spline-viewer>
        )}
      </div>
    </a>
  );
};

export default Game;
