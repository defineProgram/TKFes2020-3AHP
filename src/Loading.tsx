import React, { useEffect, useState } from "react";
import './Loading.css';

export default function Loading() {
  const [isLoaded, setisLoaded] = useState(false);
  const onLoad = (() => {
    setisLoaded(true);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    if (document.readyState == "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return (): void => {
        window.removeEventListener("load", onLoad);
      }
    }
  });

  return (
    <div className={"loading" + (isLoaded ? " inactive" : " active")}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  )
}