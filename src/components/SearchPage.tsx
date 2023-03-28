import Axios from "axios";

import { PageContainer, PageTitle, StyledPageWrapper } from "./Home-Style";
import { useParams } from "react-router-dom";
import { MarketplaceContext } from "../App";
import React, { useEffect } from "react";
import {ListingData, ListingWrapper, StyledImg, StyledListing} from "./SearchPage-Style";

export const SearchPage = () => {
  const [listings, setListings] = React.useState([
    {
      id: 0,
      imagine: "",
      titlu: "",
      descriere: "",
      data: "",
      id_subcategorie: 0,
      id_user: 0,
    },
  ]);
  let params = useParams();
  const { marketplaceData } = React.useContext(MarketplaceContext);
  marketplaceData?.subcategory?.id !== 0 &&
    localStorage.setItem(
      "subcategoryId",
      marketplaceData?.subcategory?.id.toString()
    );
  useEffect(() => {
      if(params.searchCateg==='all'){
          Axios.get(
              `http://localhost:3002/api/search/${params.searchParam}`
          ).then((data) => {
              setListings(data.data);
          });

      }else{
          Axios.get(
              `http://localhost:3002/api/listings/${parseInt(
                  localStorage.getItem("subcategoryId") || "",
                  10
              )}`
          ).then((data) => {
              setListings(data.data);
          });
      }
  }, []);

  const displayListings = listings.map((listing) => {
    if (listing.titlu === "") {
      return <></>;
    }
    // @ts-ignore

    // const base64 = listing.imagine.data.toString('base64');

    // const url = window.URL.createObjectURL(listing.imagine);
    const src = "data:image/png;base64," + listing.imagine;
      console.log("listing.imagine", listing.imagine);

    return (
      <StyledListing>
        <StyledImg src={src} alt={listing.titlu} />
        <ListingData>
          <div>{listing.titlu}</div>
          <div>{listing.descriere}</div>
          <div>Data cand a fost postat: {listing.data.slice(0,10)}</div>
        </ListingData>
      </StyledListing>
    );
  });

  return (
    <StyledPageWrapper>
      <PageContainer>
        <PageTitle>Cauta {params.searchParam?.replaceAll("-", " ")}</PageTitle>
        <PageTitle>Categorie: {params.searchCateg}</PageTitle>
        <PageTitle> Subcategorie: {params.searchParam} </PageTitle>
        <ListingWrapper>{displayListings}</ListingWrapper>
      </PageContainer>
    </StyledPageWrapper>
  );
};
