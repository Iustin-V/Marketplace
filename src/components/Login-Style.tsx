import styled from "styled-components";
import { getAllByPlaceholderText } from "@testing-library/react";

export const StyledLoginInput = styled.input`
  background-color: #f6f6f6;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 3px solid #f6f6f6;
  outline: none;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  :focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
  }
`;
export const StyledLoginButton = styled.div<{ isRegister?: boolean }>`
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #2585b6;
  }
  @media (max-width: 786px) {
    width: 70%;
    padding: 15px;
  }
`;
export const ButtonWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 15px;
  text-align: center;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const StyledForm = styled.div`
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: fit-content;
  position: relative;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top:100px;

  @media (max-width: 1200px) {
    top:80px;
  }
  @media (max-width: 786px) {
    width: 100%;
  }
`;
export const ErrorWrapper = styled.div`
  color: white;
  font-weight: bold;
  background-color: rgba(255, 0, 0, 0.5);
  font-size: 15px;
  border-radius: 5px;
  padding: 10px;
`;
