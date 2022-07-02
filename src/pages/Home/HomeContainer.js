import React from "react";
import HomeView from "./HomeView";
import { Link } from "react-router-dom";
import { DASHBOARD } from "../../navigation/Constants";

export const HomeContainer = () => {
  return (
    <div>
      <Link to={DASHBOARD}>Dashboard</Link>
      <HomeView title="Home" />
    </div>
  );
}
