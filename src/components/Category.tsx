
import React from 'react'
import Axios from "axios";
import {MarketplaceContext} from "../App";
import {useParams} from "react-router-dom";
import {PageContainer, PageSubtitle, PageTitle, StyledPageWrapper} from './Home-Style';
import {capitalizeFirstLetter} from "../utils/CapitalizeText";


const Category = () => {
    let params = useParams();


    const [subcategory,setSubcategory]=React.useState(    [{ id: 0, nume: "", id_categorie: 0 }],)
React.useEffect(()=>{
        Axios.get(
            `http://localhost:3002/api/categories/${(params?.categoryId || 1 + 1)}/subcategories`
        ).then((data) => {
            console.log("data", data.data);
            setSubcategory(data.data);
        });
},[])
    console.log('subcategory',subcategory )


    return (    <StyledPageWrapper>
        <PageContainer>

            <PageTitle>Categorie: {capitalizeFirstLetter(params.categoryName)}</PageTitle>
            <PageSubtitle>Selecteaza una din subcategoriile de mai jos:</PageSubtitle>
        <div className="mx-auto w-full max-w-5xl bg-white p-0 mt-2 md:p-20 md:mt-0">
            <ul className="flex flex-col">
                {subcategory?.map(subcateg => (
                    <li key={subcateg.id} className="border-b-2 border-gray-100">
                        <div className={`py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent hover:border-blue-400 hover:bg-gray-200"`} >

                            <div className="sm:pl-4 pr-8 flex sm:items-center">

                                <div className="space-y-1">
                                    <p className="text-base text-gray-700 font-bold tracking-wide">{subcateg.nume}</p>

                                </div>
                            </div>


                            <div className="pr-4 flex flex-col justify-between items-end" onClick={()=>localStorage.setItem('subcategoryId',subcateg.id.toString())}>

                                <a href={ `/cauta/${params.categoryName?.toLowerCase()}/${subcateg.nume}`} className="text-sm text-gray-500 font-semibold hover:underline hover:text-gray-700">Vezi anunturi</a>
                            </div>

                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
        </PageContainer>
        </StyledPageWrapper>
    )
}

export default Category
