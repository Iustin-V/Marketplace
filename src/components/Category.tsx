
import React from 'react'
import Axios from "axios";
import {MarketplaceContext} from "../App";
import {useParams} from "react-router-dom";


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


    return (
        <div className="mx-auto w-full max-w-5xl bg-white p-20">
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

                                <a href={ `/search/${params.categoryName?.toLowerCase()}/${subcateg.nume}`} className="text-sm text-gray-500 font-semibold hover:underline hover:text-gray-700">Vezi anunturi</a>
                            </div>

                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Category
