import Axios from "axios";

import {PageContainer, PageSubtitle, PageTitle, StyledPageWrapper} from "./Home-Style";
import { useParams } from "react-router-dom";
import { MarketplaceContext } from "../App";
import React, { useEffect } from "react";
import {ListingData, ListingWrapper, StyledImg, StyledListing} from "./SearchPage-Style";
import {capitalizeFirstLetter} from "../utils/CapitalizeText";

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
      if(params.searchCateg==='toate'){
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


      console.log(marketplaceData)
    return (
      // <StyledListing>
      //   <StyledImg src={src} alt={listing.titlu} />
      //   <ListingData>
      //     <div>{listing.titlu}</div>
      //     <div>{listing.descriere}</div>
      //     <div>Data cand a fost postat: {listing.data.slice(0,10)}</div>
      //   </ListingData>
      // </StyledListing>
        <>

            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#" className="flex overflow-hidden h-64">
                    <img className="rounded-t-lg object-cover w-96" src={src} alt=""/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{listing.titlu}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">{listing.descriere}</p>
                    <p className="mb-3 font-normal text-gray-700 ">Data adaugare: {listing.data.slice(0,10)}</p>
                    <a href={`http://localhost:3000/${params.searchParam}/anunt/${listing.titlu.toLowerCase().replaceAll(' ', '-')}/${listing.id}`}
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Vezi anuntul
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
  });

  return (
    <StyledPageWrapper>
      <PageContainer>
        <PageTitle>Cauta {params.searchParam?.replaceAll("-", " ")}</PageTitle>
        <PageSubtitle>Categorie: {capitalizeFirstLetter(params.searchCateg)}</PageSubtitle>
          {params.searchCateg!=='toate' &&<PageSubtitle> Subcategorie: {params.searchParam} </PageSubtitle>}
        <ListingWrapper>{displayListings}</ListingWrapper>
      </PageContainer>
    </StyledPageWrapper>
  );
};
