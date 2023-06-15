import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background-color: #006587;
  top: 0;
  z-index: 998;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledNav = styled.div`
  height: 80px;
  padding: 0 40px;
  width: calc(100% - 80px);
  display: flex;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 0 40px 8px;
    height: fit-content;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;
export const StyledNavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;
export const StyledNavItem = styled(Link)`
  width: fit-content;
  height: 75px;
  margin-top: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  padding: 0 15px;
  position: relative;
  border-radius: 15px 15px 0 0;
  :hover {
    background-color: cornflowerblue;
    transition: background-color 1s;
  }
  @media (max-width: 1200px) {
    border-radius: 15px 15px;
    margin-left: 5px;
  }
  @media (min-width: 1200px) {
    &::before {
      content: " ";
      width: 0%;
    }

    &:hover::before {
      content: " ";
      position: absolute;
      bottom: 25px;
      width: 80%;
      height: 2px;
      background: blue;
      transition: all 1.5s;
    }
  }

  @media (max-width: 768px) {
    height: fit-content;
  }
`;
export const StyledInput = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 15px;
  padding: 5px 10px;
  @media (max-width: 900px) {
   display: none;
  }
`;
export const Logo = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  color: white;
  text-decoration: none;
`;
