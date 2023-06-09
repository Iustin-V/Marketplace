import React, {useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { SearchPage } from "./components/SearchPage";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { AddPage } from "./components/AddPage";
import {ProductPage} from "./components/ProductPage";
import Category from "./components/Category";
import {Account} from "./components/Account";
import {CreateProfile} from "./components/CreateProfile";
import {EditProfile} from "./components/EditProfile";

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
  const { marketplaceData, setMarketplaceData } = useContext(MarketplaceContext);

  const providerValue = { marketplaceData, setMarketplaceData };
  return (
    <div>
      <MarketplaceContext.Provider value={providerValue}>
        <BrowserRouter>
          {/*<div ref={topRef} />*/}
          <Navbar />
          {/*<ScrollToTop />*/}
          <Routes>
            <Route path={`/acasa`} element={<Home />} />
            <Route path={`/`} element={<Home />} />
            <Route path={`/login`} element={<Login />} />
            <Route path={`/contul-tau`} element={<Account />} />
            <Route path={`/creeaza-profil`} element={<CreateProfile />} />
            <Route path={`/editeaza-profil`} element={<EditProfile />} />

            <Route path={`/adauga-anunt`} element={<AddPage />} />
            <Route path={`/categorie/:categoryId/:categoryName`} element={<Category />} />
            <Route
              path={"/cauta/:searchCateg/:searchParam"}
              element={<SearchPage />}
            />
            <Route
              path={"/:searchCateg/anunt/:listingName/:listingId"}
              element={<ProductPage />}
            />
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
