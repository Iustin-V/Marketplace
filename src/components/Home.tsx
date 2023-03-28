import Axios from "axios";

import {
  CategoryWrapper,
  PageContainer,
  PageDescription,
  PageTitle,
  StyledCategory,
  StyledPageWrapper,
  StyledSubcategories,
  StyledSubcategory,
} from "./Home-Style";
import React, { useEffect, useState } from "react";
import { MarketplaceContext } from "../App";

export const Home = () => {
  const { marketplaceData, setMarketplaceData } =
    React.useContext(MarketplaceContext);

  const [categories, setCategories] = useState([{ id: 0, nume: "" }]);
  const [subcategory, setSubcategory] = useState([
    { id: 0, nume: "", id_categorie: 0 },
  ]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/categories/get").then((data) => {
      setCategories(data.data);
    });
  }, []);
  const getSubcategory = (index: number) => {
    Axios.get(
      `http://localhost:3002/api/categories/${index + 1}/subcategories`
    ).then((data) => {
      setSubcategory(data.data);
    });
  };
  const categoryList = categories.map((categ, index) => {
    const subcategories = subcategory.map((subcateg) => {
      if (index + 1 === subcateg.id_categorie) {
        return (
          <StyledSubcategory
            to={`http://localhost:3000/search/${categ.nume
              .replaceAll(" ", "-")
              .toLowerCase()}/${subcateg.nume
              .replaceAll(" ", "-")
              .toLowerCase()}`}
            onClick={() => {
              setMarketplaceData({ category: categ, subcategory: subcateg });
            }}
          >
            {subcateg.nume}
          </StyledSubcategory>
        );
      }
      return <></>;
    });
    return (
      <StyledCategory
        onClick={() => {
          getSubcategory(index);
        }}
      >
        {categ.nume}
        <StyledSubcategories>{subcategories}</StyledSubcategories>
      </StyledCategory>
    );
  });

  return (
    <StyledPageWrapper>
      <PageContainer>
        <PageTitle>Categorii</PageTitle>
        <PageDescription>
          Bine ați venit în secțiunea de categorii a [Numele Marketplace]! Aici
          veți găsi o gamă variată de produse și servicii, organizate în
          categorii pentru a vă facilita căutarea și navigarea. Fie că sunteți
          în căutarea de articole de îmbrăcăminte, tehnologie, produse pentru
          casă și grădină, sau orice altceva, suntem siguri că veți găsi exact
          ceea ce căutați într-unul dintre domeniile noastre de categorie.
          [Numele Marketplace] se angajează să ofere o experiență de cumpărături
          plăcută și eficientă. Prin intermediul categoriilor noastre ușor de
          navigat, veți putea să explorați și să comparați produse de la sute de
          vânzători, beneficiind de prețuri competitive și oferte speciale.
        </PageDescription>

        <CategoryWrapper> {categoryList}</CategoryWrapper>
      </PageContainer>
    </StyledPageWrapper>
  );
};
