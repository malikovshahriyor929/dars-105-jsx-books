import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../../components/header";

const Mainlayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Mainlayout;
