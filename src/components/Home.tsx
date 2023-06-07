import Axios from "axios";

import {
  AddButton,
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
      console.log("data", data.data);
      setSubcategory(data.data);
    });
  };
  const categoryList = categories.map((categ, index) => {
    const subcategories = subcategory.map((subcateg) => {
      console.log(index, subcateg.id_categorie);
      if (index + 1 === Number(subcateg.id_categorie)) {
        return (
        <p
              onClick={() => {
                setMarketplaceData({ category: {id:categ.id,nume:categ.nume}, subcategory: {id:subcateg.id,nume:subcateg.nume,id_categorie:subcateg.id_categorie} });
                window.location.href=`http://localhost:3000/search/${categ.nume
                    .replaceAll(" ", "-")
                    .toLowerCase()}/${subcateg.nume
                    .replaceAll(" ", "-")
                    .toLowerCase()}`
              }}
           className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
          <svg aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">

          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">{subcateg.nume}</span>
          <span
              className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
        </p>
        );
      }
      return <></>;
    });
    return (
    <div
        className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700" onClick={() => {
           getSubcategory(index);
         }}>
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        {categ.nume}
      </h5>
      <ul className="my-4 space-y-3">
          {subcategories}

      </ul>
      </div>

  );
  });

  return (
    // <StyledPageWrapper>
    //   <PageContainer>
    //     {localStorage.token && (
    //       <AddButton onClick={() => (window.location.href = `/adauga-anunt`)}>
    //         Adauga anunt
    //       </AddButton>
    //     )}
    //     <PageTitle>
    //       Categorii</PageTitle>
    //     <PageDescription>
    //       Bine ați venit în secțiunea de categorii a [Numele Marketplace]! Aici
    //       veți găsi o gamă variată de produse și servicii, organizate în
    //       categorii pentru a vă facilita căutarea și navigarea. Fie că sunteți
    //       în căutarea de articole de îmbrăcăminte, tehnologie, produse pentru
    //       casă și grădină, sau orice altceva, suntem siguri că veți găsi exact
    //       ceea ce căutați într-unul dintre domeniile noastre de categorie.
    //       [Numele Marketplace] se angajează să ofere o experiență de cumpărături
    //       plăcută și eficientă. Prin intermediul categoriilor noastre ușor de
    //       navigat, veți putea să explorați și să comparați produse de la sute de
    //       vânzători, beneficiind de prețuri competitive și oferte speciale.
    //     </PageDescription>
    //
    //     <CategoryWrapper>
    //       {categoryList}</CategoryWrapper>
    //   </PageContainer>
    // </StyledPageWrapper>
      <>
      <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{backgroundImage:"url('cover.jpg'); height: 60vh; max-height:460px;"}}>
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <p className="text-white font-extrabold text-3xl md:text-5xl">
             Marketplace
          </p>
          <p className="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
        </div>
      </div>

  <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

    <div className="mx-0 sm:mx-6">

      <nav className="mt-0 w-full">
        <div className="container mx-auto flex items-center">

          {/*<div className="flex w-1/2 pl-4 text-sm">*/}
          {/*  <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">*/}
          {/*    <li className="mr-2">*/}
          {/*      <a className="inline-block py-2 px-2 text-white no-underline hover:underline" href="post.html">POST</a>*/}
          {/*    </li>*/}
          {/*    <li className="mr-2">*/}
          {/*      <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>*/}
          {/*    </li>*/}
          {/*    <li className="mr-2">*/}
          {/*      <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>*/}
          {/*    </li>*/}
          {/*    <li className="mr-2">*/}
          {/*      <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="post_vue.html">POST_VUE</a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}


          {/*<div className="flex w-1/2 justify-end content-center">*/}
          {/*  <a className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">*/}
          {/*    <svg className="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>*/}
          {/*  </a>*/}
          {/*  <a className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">*/}
          {/*    <svg className="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>*/}
          {/*  </a>*/}
          {/*</div>*/}

        </div>
      </nav>

      <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">

        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
          <a href="login" className="flex flex-wrap no-underline hover:no-underline">
            <div className="w-full md:w-2/3 rounded-t">
              <img src="https://truust.io/wp-content/uploads/sites/18/2017/09/Que%CC%81-es-un-Marketplace-y-co%CC%81mo-puedes-ganar-dinero-con-e%CC%81l.jpg" className="h-full w-full shadow"/>
            </div>

            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GASESTE PRODUSUL DORIT</p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">👋 Descopera categoriile de produse </div>
                {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                {/*  Poti alege dintr-o multitudine de categorii in functie de preferintele tale*/}
                {/*</p>*/}
              </div>

              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  {/*<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
                    {/*<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
                </div>
              </div>
            </div>

          </a>
        </div>


        <div className="flex flex-wrap justify-between pt-12 -mx-6">

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://media.istockphoto.com/id/1254557894/vector/auto-car-logo-icon-vector-illustration-template-modern-sport-car-vector-logo-icon-silhouette.jpg?s=612x612&w=0&k=20&c=lO96ZazOAgnUJhi0Cm2eV-7QlNG88Xy2hArdpuOz5D4=" className="h-64 w-full rounded-t pb-6"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA AUTO</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">Include autoturisme, motociclete si piese auto</div>
                  {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                  {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.*/}
                  {/*</p>*/}
              </a>
            </div>
            {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">*/}
            {/*  <div className="flex items-center justify-between">*/}
            {/*    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
            {/*      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>


          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2018/11/House-logo-by-yahyaanasatokillah-580x387.jpg" className="h-64 w-full rounded-t pb-6"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA IMOBILIARE</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">Include apartamente, case si terenuri</div>
                  {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                  {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.*/}
                  {/*</p>*/}
              </a>
            </div>
            {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">*/}
            {/*  <div className="flex items-center justify-between">*/}
            {/*    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
            {/*      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://i.pinimg.com/originals/27/71/c9/2771c9f9eba4734edf4362e1a203b378.jpg" className="h-64 w-full rounded-t pb-6"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA ELECTRONICE</p>
                  <div className="w-full  font-bold text-xl text-gray-900 px-6">Include telefoane mobile, laptop-uri si televizoare</div>
                  {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                  {/*  Lorem ipsum eu nunc commodo posuere et sit amet ligula.*/}
                  {/*</p>*/}
              </a>
            </div>
            {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">*/}
            {/*  <div className="flex items-center justify-between">*/}
            {/*    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
            {/*      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>


          <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="https://static.vecteezy.com/system/resources/previews/010/365/751/original/eps10-blue-clothes-hanger-line-art-isolated-on-white-background-coat-hanger-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-ui-and-mobile-application-vector.jpg" className="h-full w-full rounded-t pb-6"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA ARTICOLE VESTIMENTARE</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">Include rochii, camasi si pantaloni</div>
                  {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                  {/*  Lorem ipsum eu nunc commodo posuere et sit amet ligula.*/}
                  {/*</p>*/}
              </a>
            </div>
            {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">*/}
            {/*  <div className="flex items-center justify-between">*/}
            {/*    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
            {/*      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="data:image/png;base64,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" className="h-full w-full rounded-t pb-6"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA SERVICII</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">Include servicii de transport, curatenie si constructii</div>
                  {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                  {/*  Lorem ipsum eu nunc commodo posuere et sit amet ligula.*/}
                  {/*</p>*/}
              </a>
            </div>
            {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">*/}
            {/*  <div className="flex items-center justify-between">*/}
            {/*    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
            {/*      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>



          <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="data:image/png;base64,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" className="h-full w-full rounded-t pb-6"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA LOCURI DE MUNCA</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">Include job-uri in IT, vanzari si pozitii administrative</div>
                  {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                  {/*  Lorem ipsum eu nunc commodo posuere et sit amet ligula.*/}
                  {/*</p>*/}
              </a>
            </div>
            {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">*/}
            {/*  <div className="flex items-center justify-between">*/}
            {/*    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
            {/*      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <img src="data:image/png;base64,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" className="h-full w-full rounded-t pb-6"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA ANIMALUTE DE COMPANIE</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">Include pisici, catei si papagali</div>
                  {/*<p className="text-gray-800 font-serif text-base px-6 mb-5">*/}
                  {/*  Lorem ipsum eu nunc commodo posuere et sit amet ligula.*/}
                  {/*</p>*/}
              </a>
            </div>
            {/*<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">*/}
            {/*  <div className="flex items-center justify-between">*/}
            {/*    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
            {/*      <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

        </div>

      </div>


      {/*<div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">*/}
      {/*  <h2 className="font-bold break-normal text-2xl md:text-4xl">Subscribe to Ghostwind CSS</h2>*/}
      {/*  <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>*/}
      {/*  <div className="w-full text-center pt-4">*/}
      {/*    <form action="#">*/}
      {/*      <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">*/}
      {/*        <input type="email" placeholder="youremail@example.com" className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"/>*/}
      {/*          <button type="submit" className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400">Subscribe</button>*/}
      {/*      </div>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</div>*/}


      {/*<div className="flex w-full items-center font-sans p-8 md:p-24">*/}
      {/*  <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>*/}
      {/*    <div className="flex-1">*/}
      {/*      <p className="text-base font-bold text-base md:text-xl leading-none">Ghostwind CSS</p>*/}
      {/*      <p className="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme by <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>*/}
      {/*    </div>*/}
      {/*    <div className="justify-end">*/}
      {/*      <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>*/}
      {/*    </div>*/}
      {/*</div>*/}

    </div>


  </div>


  <footer className="bg-gray-900">
    <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">

      <div className="w-full mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
             <span className="text-base text-gray-200">Marketplace</span>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
            <li>
              <a className="inline-block py-2 px-3 text-white no-underline" href="#">Intoarce-te sus</a>
            </li>
            <li>
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="adauga-anunt">Adauga un anunt</a>
            </li>
            {/*<li>*/}
            {/*  <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>



    </div>
  </footer>
      </>
);
};
