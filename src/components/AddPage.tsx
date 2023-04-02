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
  });
  const [image, getImage] = React.useState("");

  const [categories, setCategories] = useState([{ id: 0, nume: "" }]);
  const [subcategory, setSubcategory] = useState([
    { id: 0, nume: "", id_categorie: 0 },
  ]);
  useEffect(() => {
    Axios.get("http://localhost:3002/api/categories/get").then((data) => {
      setCategories(data.data);
    });
  }, []);
  const handleChange = (e: any) => {
    setDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleAddFunction = (
    titlu: string,
    descriere: string,
    imagine: any
  ) => {
    console.log(titlu, descriere, imagine);
    Axios.post("http://localhost:3002/api/anunt", {
      titlu: titlu,
      descriere: descriere,
      data: new Date(),
      id_subcategorie: 1,
      id_user: 0,
      imagine: imagine,
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const categoryList = categories.map((categ, index) => {

    return (
  <option>{categ.nume}</option>
    );
  });
  return (
    <StyledPageWrapper>
      <PageContainer>
        <PageTitle>Adauga anunt</PageTitle>
        <input id="titlu" onChange={handleChange} placeholder="titlu" />
        <input id="descriere" onChange={handleChange} placeholder="descriere" />
        <UploadImage uploadFunction={getImage} />
        <select placeholder="Categorii">{categoryList}</select>

        <button
          onClick={() =>
            handleAddFunction(details.titlu, details.descriere, image)
          }
        >
          Adauga anunt nou
        </button>
      </PageContainer>
    </StyledPageWrapper>
  );
};
