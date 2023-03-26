import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import {Home} from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*<div ref={topRef} />*/}
        <Navbar />
        {/*<ScrollToTop />*/}
        <Routes>
            <Route path={`/acasa`} element={<Home />} />
          {/*  {navbarLinks}*/}
          {/*  <Route path="/blog" element={<WorkInProgress />} />*/}
          {/*  <Route path="/login" element={<Login />} />*/}
          {/*  {coursesLinkRoutesChildParents}*/}
          {/*  {coursesLinkRoutesTeacher}*/}
          {/*  {eventsLinkRoutes}*/}
          {/*  <Route path="*" element={<UnknownRoute />} />*/}
        </Routes>
        {/*<ToTopButton topRef={topRef} isTopButton={isTopButton} />*/}
        {/*<Footer />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
