import { PageContainer, PageTitle, StyledPageWrapper } from "./Home-Style";
import React from "react";
import Axios from "axios";

import {
  ButtonWrapper,
  StyledForm,
  StyledLoginButton,
  StyledLoginInput,
} from "./Login-Style";

export const Login = () => {
  const handleRegister = () => {
    console.log("aaaaaaaaa");
    Axios.post("http://localhost:3002/api/register", {
      nume_utilizator: "Cristi",
      mail: "Cristi@example.com",
      nume: "Cristi Cristi",
      parola: "password123",
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = () => {
    Axios.post("http://localhost:3002/api/login", {
      nume_utilizator: "Cristi",
      parola: "password123",
    })
      .then((response) => {
        console.log(response.data.message);
        localStorage.setItem("token", response.data.token);

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <StyledPageWrapper>
      <PageContainer>
        <StyledForm>
          <PageTitle>Intra in cont</PageTitle>

          <StyledLoginInput placeholder="Nume" />

          <StyledLoginInput type="password" placeholder="Parola" />
          <ButtonWrapper>
            <StyledLoginButton onClick={() => handleLogin()}>
              Autentifica-te
            </StyledLoginButton>
            <StyledLoginButton onClick={() => handleRegister()}>
              Inregistreaza-te
            </StyledLoginButton>
          </ButtonWrapper>
        </StyledForm>
      </PageContainer>
    </StyledPageWrapper>
  );
};
