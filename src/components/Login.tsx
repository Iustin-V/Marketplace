import React from "react";
import Axios from "axios";

import { PageContainer, PageTitle, StyledPageWrapper } from "./Home-Style";

import {
  ButtonWrapper,
  ErrorWrapper,
  StyledForm,
  StyledLoginButton,
  StyledLoginInput,
} from "./Login-Style";

export const Login = () => {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [newUserData,setNewUserData] = React.useState({
    email:"",
    username: "",
    name:"",
    password: "",
  });

  const [errorState, setErrorState] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);
  const handleRegister = (email:string,
                          username: string,
                          name:string,
                          password: string) => {
    console.log(newUserData)
    Axios.post("http://localhost:3002/api/register", {
      mail: email,
      nume_utilizator: username,
      nume: name,
      parola: password,
    })
      .then((response) => {
        console.log(response.data.message);
        window.location.href = `/creeaza-profil`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // React.useEffect(() => {
  //   if (localStorage.token) {
  //     window.location.href = `/acasa`;
  //   }
  // }, []);

  const handleLogin = (email: string, parola: string) => {
    Axios.post("http://localhost:3002/api/login", {
      mail: email,
      parola: parola,
    })
      .then((response) => {
        console.log(response.data.message);
        localStorage.setItem("token", response.data.token);
        setErrorState("");
        window.location.href = `acasa`;
      })
      .catch((error) => {
        setErrorState(error);
      });
  };

  const handleChange = (e: any) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    setErrorState('')
  };
  const handleRegisterChange = (e: any) => {
    setNewUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setErrorState('')
  };

  return (
    <StyledPageWrapper>
      {!localStorage.token ? (
        <PageContainer>
          <StyledForm>
            {isLogin?<>
              <PageTitle style={{marginTop:"0px"}}>Inregistreaza-te</PageTitle>

              <StyledLoginInput
                  id="email"
                  placeholder="Email"
                  onChange={handleRegisterChange}
              />

              <StyledLoginInput
                  id="name"
                  placeholder="Nume Complet"
                  onChange={handleRegisterChange}
              />
              <StyledLoginInput
                  id="username"
                  placeholder="Nume Utilizator"
                  onChange={handleRegisterChange}
              />

              <StyledLoginInput
                  id="password"
                  type="password"
                  placeholder="Parola"
                  onChange={handleRegisterChange}
              />
              <ButtonWrapper>
                <StyledLoginButton
                    onClick={() =>
                       setIsLogin(false)
                    }
                >
                  Autentifica-te
                </StyledLoginButton>
                <StyledLoginButton onClick={() => handleRegister(newUserData.email,newUserData.username,newUserData.name,newUserData.password)}>
                  Inregistreaza-te
                </StyledLoginButton>
              </ButtonWrapper>
              {errorState && (
                  <ErrorWrapper>
                    A aparut o eroare la autentificare, va rugam incercati din nou.
                  </ErrorWrapper>
              )}
            </>:<>
              <PageTitle style={{marginTop:"0px"}} >Intra in cont</PageTitle>

              <StyledLoginInput
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
              />

              <StyledLoginInput
                  id="password"
                  type="password"
                  placeholder="Parola"
                  onChange={handleChange}
              />
              <ButtonWrapper>
                <StyledLoginButton
                    onClick={() =>
                        handleLogin(credentials.email, credentials.password)
                    }
                >
                  Autentifica-te
                </StyledLoginButton>
                <StyledLoginButton onClick={() => setIsLogin(true)}>
                  Inregistreaza-te
                </StyledLoginButton>
              </ButtonWrapper>
              {errorState && (
                  <ErrorWrapper>
                    A aparut o eroare la autentificare, va rugam incercati din nou.
                  </ErrorWrapper>
              )}
            </>
            }
          </StyledForm>

        </PageContainer>
      ) : (
        <></>
      )}
    </StyledPageWrapper>
  );
};
