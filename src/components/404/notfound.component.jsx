import React from "react";
import { useLocation, useRouteError } from "react-router-dom";
import "./notfound.styles.scss";

const NotFound = () => {
  const error = useRouteError();
  const location = useLocation();
  console.log(error)

  return (
    <div className="not_found_banner">
      <p className="title">Page Not Found</p>
      <img
        className="error_image"
        src={require("../../assets/vecteezy_404-landing-page_6549647.jpg")}
        alt="error image"
      ></img>
      {error?.status === 404 ? <p> Please correct path </p> : null
      } 
       {error?.message === "Network Error" ? <p> Please check your internet connection </p> : <p> path  {location?.pathname} <span>{error?.message || error?.statusText} </span></p>
      } 
    </div>
  );
};

export default NotFound;
