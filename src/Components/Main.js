import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
