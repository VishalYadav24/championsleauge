import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return <div>NotFound {error?.message}</div>;
};

export default NotFound;
