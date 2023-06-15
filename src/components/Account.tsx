import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Account = () => {
  const [profilData, setProfilData] = useState({
    id: 0,
    nume: "",
    prenume: "",
    data_nasterii: "",
    data_creare_cont: "",
    oras: "",
    tara: "",
    user_id: 0,
    poza_profil: "",
    poza_cover: "",
    descriere: "",
  });
  const [isFriend, setIsFriend] = useState("");
  const [stats, setStats] = useState({
    commentCount: 0,
    friendCount: 0,
    photoPostCount: 0,
  });
  const [posts, setPosts] = useState([
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (params.id) {
      Axios.get(`http://localhost:3002/api/user/profile/${params.id}`)
        .then((data) => {
          setProfilData(data.data[0]);
        })
        .catch((error) => {
          console.error(error);
        });

      Axios.get(`http://localhost:3002/api/user/posts/${params.id}`)
        .then((response) => {
          console.log(response.data);
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      Axios.get(`http://localhost:3002/api/user-stats/${params.id}`)
        .then((response) => {
          setStats(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Axios.get("http://localhost:3002/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          setProfilData(response.data[0]);
        })
        .catch((error) => {
          console.error(error);
        });
      Axios.get("http://localhost:3002/api/get-listings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      Axios.get("http://localhost:3002/api/user-stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log("setStats", response.data);
          setStats(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const postListImage = posts.map((post) => {
    if (post.imagine) {
      const src = "data:image/png;base64," + post.imagine;

      return (
          <>

            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#" className="flex overflow-hidden h-64">
                <img className="rounded-t-lg object-cover w-96" src={src} alt=""/>
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{post.titlu}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">{post.descriere}</p>
                <p className="mb-3 font-normal text-gray-700 ">Data adaugare: {post.data.slice(0,10)}</p>
                <a href={`http://localhost:3000/${params.searchParam}/anunt/${post.titlu.toLowerCase().replaceAll(' ', '-')}/${post.id}`}
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
    }
  });
  const postList = posts.map((post) => {
    if (!post.imagine) {
      return (
        // <PostCard
        //   id={post.id}
        //   userId={post.userId}
        //   content={post.continut}
        //   date={post.data_postarii}
        //   imagine={post.imagine}
        //   nume={post.nume}
        //   prenume={post.prenume}
        // />
          <div>listing</div>
      );
    }
  });

  const handleInviteFriend = (id: number) => {
    const token = localStorage.getItem("token");

    if (isFriend === "Friends") {
      Axios.delete(`http://localhost:3002/api/remove-friend/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Axios.post(
        "http://localhost:3002/api/create-friend",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Body: id,
          },
        }
      )
        .then((response) => {
          console.log("merge");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <div className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover profile-cover"
            style={{
              backgroundImage: `url(data:image/png;base64,${profilData.poza_cover})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt={`${profilData.nume}${profilData.prenume}_poza_profil`}
                        src={`data:image/png;base64,${profilData.poza_profil}`}
                        className="shadow-xl rounded-full  h-36 w-36 object-cover align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="flex flex-row gap-2 items-center justify-center margin-responsive mt-32 md:mt-0">

                      {!params.id && (
                        <button
                          className="bg-blue-800 hover:bg-blue-600 active:bg-blue-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            window.location.href = "/editeaza-profil";
                          }}
                        >
                          Edit
                        </button>
                      )}
                      <a
                        className="bg-blue-800 hover:bg-blue-600 active:bg-blue-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                        href="#posts"
                      >
                        Anunturi
                      </a>
                      <button
                          className="bg-blue-800 hover:bg-blue-600 active:bg-blue-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            localStorage.removeItem('token')
                            window.location.href = "/login";
                          }}
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">

                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {posts.length}
                        </span>

                        <span className="text-sm text-blueGray-400">
                          Anunturi
                        </span>
                      </div>          <div className="lg:mr-4 p-3 text-center">
                      <button
                          className="bg-blue-800 hover:bg-blue-600 active:bg-blue-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            window.location.href = "/adauga-anunt";
                          }}
                      >
                        Adauga anunt
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {profilData.prenume} {profilData.nume}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {profilData.oras}, {profilData.tara}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {profilData.descriere}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        <>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Anunturi
            </h3>
          </div>
          <div
            id={"posts"}
            className="flex flex-col md:flex-row w-full items-center flex-wrap justify-center pt-1 gap-10"
          >
            {postListImage}
          </div>
        </>

    </>
  );
};
