import Axios from "axios";
import auto from '../images/auto.jpg';
import imobiliare from '../images/imobiliare.jpg';
import telefon from '../images/telefon.jpg';
import fashion from '../images/fashion.jpg';
import servicii from '../images/servicii.jpg';
import gradinda from '../images/gradina.jpg';
import job from '../images/job.jpg';
import animalecompanie from '../images/animalecompanie.jpg';
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
import {log} from "util";


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
                window.location.href=`http://localhost:3000/cauta/${categ.nume
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
  console.log('categoryList',categories)
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
                <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5">👋 Descopera categoriile de produse </div>
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


        <div className="flex flex-wrap justify-between p-12 -mx-6">

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" >
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <a href="/categorie/1/auto" className="flex flex-wrap no-underline hover:no-underline">
                <img src={auto} className="h-64 w-full rounded-t pb-6 object-cover"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA AUTO</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5">Include autoturisme, motociclete si piese auto</div>
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
              <a href="/categorie/2/imobiliare" className="flex flex-wrap no-underline hover:no-underline">
                <img src={imobiliare} className="h-64 w-full rounded-t pb-6 object-cover"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA IMOBILIARE</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5">Include apartamente, case si terenuri</div>
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
              <a href="/categorie/3/electronice" className="flex flex-wrap no-underline hover:no-underline">
                <img src={telefon} className="h-64 w-full rounded-t pb-6 object-cover"/>
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
              <a href="/categorie/4/articole-vestimentare" className="flex flex-wrap no-underline hover:no-underline">
                <img src={fashion} className="h-full w-full rounded-t pb-6 object-cover"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA ARTICOLE VESTIMENTARE</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5">Include rochii, camasi si pantaloni</div>
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
              <a href="/categorie/5/servicii" className="flex flex-wrap no-underline hover:no-underline">
                <img src={servicii} className="h-full w-full rounded-t pb-6 object-cover"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA SERVICII</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5">Include servicii de transport, curatenie si constructii</div>
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
              <a href="/categorie/6/locuri-de-munca" className="flex flex-wrap no-underline hover:no-underline">
                <img src={job} className="h-full w-full rounded-t pb-6 object-cover"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA LOCURI DE MUNCA</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5">Include job-uri in IT, vanzari si pozitii administrative</div>
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
              <a href="/categorie/7/animale-de-companie" className="flex flex-wrap no-underline hover:no-underline">
                <img src={animalecompanie} className="h-full w-full rounded-t pb-6 object-cover"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA ANIMALUTE DE COMPANIE</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5">Include pisici, catei si papagali</div>
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
              <a href="/categorie/8/casa-si-gradina" className="flex flex-wrap no-underline hover:no-underline">
                <img src={gradinda} className="h-full w-full rounded-t pb-6 object-cover"/>
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">DESCOPERA CASA SI GRADINA</p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6 mb-5 mb-5">Include mobila, articole gradina si decoratiuni</div>
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
