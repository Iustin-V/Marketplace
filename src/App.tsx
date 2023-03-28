import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { SearchPage } from "./components/SearchPage";
import { Home } from "./components/Home";
import {Login} from "./components/Login";

export const MarketplaceContext = React.createContext({
  marketplaceData: {
    category: { id: 0, nume: "" },
    subcategory: { id: 0, nume: "", id_categorie: 0 },
  },
  setMarketplaceData: (search: {
    category: { id: number; nume: string };
    subcategory: { id: number; nume: string; id_categorie: number };
  }) => {},
});

function App() {
  const [marketplaceData, setMarketplaceData] = React.useState({
    category: { id: 0, nume: "" },
    subcategory: { id: 0, nume: "", id_categorie: 0 },
  });
  const providerValue = { marketplaceData, setMarketplaceData };
  return (
    <div>
      <MarketplaceContext.Provider value={providerValue}>
        <BrowserRouter>
          {/*<div ref={topRef} />*/}
          <Navbar />
          {/*<ScrollToTop />*/}
          <Routes>
            <Route path={`/home`} element={<Home />} />
            <Route path={`/login`} element={<Login />} />
            <Route path={"/search/:searchCateg/:searchParam"} element={<SearchPage />} />
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
      </MarketplaceContext.Provider>
    </div>
  );
}

export default App;
