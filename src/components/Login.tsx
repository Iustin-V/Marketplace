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
    username: "",
    password: "",
  });

  const [errorState, setErrorState] = React.useState("");
  const handleRegister = () => {
    Axios.post("http://localhost:3002/api/register", {
      nume_utilizator: "marcelboss",
      mail: "marcel@example.com",
      nume: "marcel prodan",
      parola: "password123",
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    if (localStorage.token) {
      window.location.href = `/acasa`;
    }
  }, []);
  const handleLogin = (nume_utilizator: string, parola: string) => {
    Axios.post("http://localhost:3002/api/login", {
      nume_utilizator: nume_utilizator,
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
  };

  return (
    <StyledPageWrapper>
      {!localStorage.token ? (
        <PageContainer>
          <StyledForm>
            <PageTitle>Intra in cont</PageTitle>

            <StyledLoginInput
              id="username"
              placeholder="Nume"
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
                  handleLogin(credentials.username, credentials.password)
                }
              >
                Autentifica-te
              </StyledLoginButton>
              <StyledLoginButton onClick={() => handleRegister()}>
                Inregistreaza-te
              </StyledLoginButton>
            </ButtonWrapper>
            {errorState && (
              <ErrorWrapper>
                A aparut o eroare la autentificare, va rugam incercati din nou.
              </ErrorWrapper>
            )}
          </StyledForm>
        </PageContainer>
      ) : (
        <></>
      )}
    </StyledPageWrapper>
  );
};
