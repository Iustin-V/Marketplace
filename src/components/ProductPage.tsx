import React, {useEffect, useState} from "react";
import Axios from "axios";
import {useParams} from "react-router-dom";


export const ProductPage = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [listingData,setListingData]=useState({titlu: '', descriere: '', data: '',imagine:''})
    let params = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:3002/api/listing/${params.listingId}`).then((data) => {
            setListingData(data.data[0]);
        });
        console.log(listingData)
    }, []);
    const src = "data:image/png;base64," + listingData.imagine;

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 top-20 relative">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt={listingData.titlu} src={src} />
                <img className="mt-6 w-full" alt={listingData.titlu}   src={src} />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt={listingData.titlu}  src={src} />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{listingData.titlu}</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >{listingData.titlu}
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800 mr-3" >Descriere:</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600">{listingData.descriere}
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                        </p>

                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Data adaugare:</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600"> {listingData.data.slice(0,10)}</p>
                    </div>
                </div>
                <div>
                    <div >
                        <div onClick={() => setShow3(!show3)} className="flex justify-between items-center cursor-pointer">
                            <button
                                className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                                aria-label="show or hide"
                            >     <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                                Contacteaza vanzatorul
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show3 ? "block" : "hidden")} id="sect">
                            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                                <p className="text-base leading-4 text-gray-800">Telefon:</p>
                                <div className="flex items-center justify-center">
                                    <p className="text-sm leading-none text-gray-600"> {}</p>
                                </div>
                            </div>
                            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                                <p className="text-base leading-4 text-gray-800">Email:</p>
                                <div className="flex items-center justify-center">
                                    <p className="text-sm leading-none text-gray-600"> {}</p>
                                </div>
                            </div>
                            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                                <p className="text-base leading-4 text-gray-800">Whatsapp:</p>
                                <div className="flex items-center justify-center">
                                    <p className="text-sm leading-none text-gray-600"> {}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Informații retur</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                            Platforma noastră funcționează ca un intermediar între vânzători și cumpărători, facilitând tranzacțiile și asigurând o experiență de cumpărare plăcută. Cu toate acestea, politica de retur variază în funcție de fiecare vânzător în parte.                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Contactează-ne</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">Echipa noastră este aici pentru a te sprijini și a răspunde la întrebările tale. Nu ezita să ne contactezi la 0771717123 sau pe mail la admin_help@marketplace.com!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

