import {
  PageContainer,
  PageTitle,
  StyledCategory,
  StyledPageWrapper,
  StyledSubcategories,
  StyledSubcategory
} from "./Home-Style";
import React, {useEffect, useState} from "react";
import { UploadImage } from "./UploadImage";
import Axios from "axios";

export const AddPage = () => {
  const [details, setDetails] = React.useState({
    titlu: "",
    descriere: "",
    data: "",
    id_subcategorie: 0,
    id_user: 0,
    localitate:'',
    judet:''
  });
  const [image, getImage] = React.useState("");
  const [image1, getImage1] = React.useState("");
  const [image2, getImage2] = React.useState("");
  const [image3, getImage3] = React.useState("");

  const [categories, setCategories] = useState([{ id: 0, nume: "" }]);
  const [currentSubcategory, setCurrentSubcategory] = useState(0);
  const [subcategory, setSubcategory] = useState([
    { id: 0, nume: "", id_categorie: 0 },
  ]);
  useEffect(() => {
    Axios.get("http://localhost:3002/api/categories/get").then((data) => {
      setCategories(data.data);
    });
  }, []);
  const getSubcategory = (index: number) => {
    console.log('aaaaaaaaaaa',index)
    Axios.get(
        `http://localhost:3002/api/categories/${index }/subcategories`
    ).then((data) => {
      console.log("data", data.data);
      setSubcategory(data.data);
    });
  };
  const handleChange = (e: any) => {
    setDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleAddFunction = (
    titlu: string,
    descriere: string,
    subcategorie:number,
    imagine: any,
    localitate:string,
    judet:string,

  ) => {
    console.log(subcategorie)
    console.log(titlu, descriere, imagine);
    Axios.post("http://localhost:3002/api/anunt", {

        titlu: titlu,
        descriere: descriere,
        data: new Date(),
        id_subcategorie: subcategorie,
        id_user: 0,
        imagine: imagine,
        localitate: localitate,
        judet: judet
    })
      .then((response) => {
        window.location.href='/'

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const categoryList = categories.map((categ, index) => {

    return (
  <option
  >{categ.nume}</option>
    );
  });
  const subcategoryList = subcategory.map((subcateg, index) => {
   // @ts-ignore
    return (
  <option>{subcateg.nume}</option>
    );
  });
  return (
      <>

    {/*<StyledPageWrapper>*/}
    {/*  <PageContainer>*/}
    {/*    <PageTitle>Adauga anunt</PageTitle>*/}
    {/*    <input id="titlu" onChange={handleChange} placeholder="titlu" />*/}
    {/*    <input id="descriere" onChange={handleChange} placeholder="descriere" />*/}
    {/*    <UploadImage uploadFunction={getImage} />*/}
    {/*    <UploadImage uploadFunction={getImage1} />*/}
    {/*    <UploadImage uploadFunction={getImage2} />*/}
    {/*    <UploadImage uploadFunction={getImage3} />*/}
    {/*    <select placeholder="Categorii" onChange={(e)=> {*/}
    {/*      getSubcategory(categories[e.target.selectedIndex-1]?.id)*/}
    {/*      console.log(e.target.selectedIndex-1)*/}
    {/*    }} ><option>Alege Categoria</option>*/}
    {/*      {categoryList}</select>*/}
    {/*    <select placeholder="Subcategorie" ><option>Alege Subcategoria</option>{subcategoryList}</select>*/}
    {/*    <button*/}
    {/*      onClick={() =>*/}
    {/*        handleAddFunction(details.titlu, details.descriere, currentSubcategory,image)*/}
    {/*      }*/}
    {/*    >*/}
    {/*      Adauga anunt nou*/}
    {/*    </button>*/}
    {/*  </PageContainer>*/}
    {/*</StyledPageWrapper>*/}
  <div
      className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{backgroundImage:"url(https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)"}}>
    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
    <div className="max-w-6xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
      <div className="grid  gap-8 grid-cols-1">
        <div className="flex flex-col ">
          <div className="flex flex-col sm:flex-row items-center">
            <h2 className="font-semibold text-lg mr-auto">Adauga un anunt</h2>
            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
          </div>
          <div className="mt-5">
            <div className="form">
              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2">Titlu <abbr
                      title="required">*</abbr></label>
                  <input placeholder="Titlu" onChange={handleChange}
                         className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                         required={true} type="text" name="integration[shop_name]" id="titlu"/>
                    <p className="text-red text-xs hidden">Please fill out this field.</p>
                </div>
              </div>
              <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">Judet</label>
                  <input placeholder="Judet" onChange={handleChange}
                         className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                         type="text" name="integration[street_address]" id="judet"/>
                </div>
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">Localitate<abbr title="required">*</abbr></label>
                  <input placeholder="Localitate" onChange={handleChange}
                         className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                         type="text" name="integration[street_address]" id="localitate"/>
                  <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                </div>
              </div>
              <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">Categorie</label>
                  <select onChange={(e)=> {
                    getSubcategory(categories[e.target.selectedIndex-1]?.id)
                    console.log(e.target.selectedIndex-1)
                  }}
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                      required={true} name="integration[city_id]" id="integration_city_id">
                    <option>Alege Categoria</option>
                    {categoryList}
                  </select>
                </div>
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">Subcategorie<abbr title="required">*</abbr></label>
                  <select
                      className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                      required={true} name="integration[city_id]" id="integration_city_id"
                      //@ts-ignore
                      onChange={(e)=>setCurrentSubcategory(subcategory.find(obj => obj['nume'] === e.target.value)?.id)}
               >
                    <option>Alege Subcategoria</option>{subcategoryList}
                  </select>
                  <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                </div>
              </div>
              <div className="flex-auto w-full mb-1 text-xs space-y-2">
                <label className="font-semibold text-gray-600 py-2">Descriere</label>
                <textarea  name="message" id="descriere" onChange={handleChange}
                           className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                          placeholder="Descriere" spellCheck="false"></textarea>
                <p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
              </div>
              <div className="md:space-y-2 mb-3">
                <div className="flex items-center py-6">
                  <label className="cursor-pointer ">
                    <UploadImage uploadFunction={getImage} />
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <p className="text-xs text-red-500 text-right my-3">Required fields are marked with an
                asterisk <abbr title="Required field">*</abbr></p>
              <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">

                <button
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    onClick={()=>  handleAddFunction(details.titlu, details.descriere, currentSubcategory,image,details.localitate,details.judet)
                      }
                >
                  Adauga anuntul
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>


  );
};
