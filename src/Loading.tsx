import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Loading.css';

export default function Loading() {
  const { pathname } = useLocation();
  const [isLoaded, setisLoaded] = useState(false);
  const onLoad = (() => {
    setisLoaded(false);
    setTimeout(() => {
      setisLoaded(true);
    }, 100);
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
  }, [pathname]);

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