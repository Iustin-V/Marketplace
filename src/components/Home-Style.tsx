import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    height: 700px;
  }
`;
export const PageContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: auto;
  flex-direction: column;

  @media (max-width: 1200px) {
    max-width: 800px;
  }
`;
export const PageTitle = styled.p`
  font-size: 30px;
  margin-top: 100px;
`;
export const PageDescription = styled.p`
  font-size: 20px;
`;
export const StyledCategory = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 150px;
  max-width: 1000px;
  flex-wrap: wrap;
`;
export const StyledSubcategory = styled(Link)`
  text-decoration: none;
`;
export const StyledSubcategories = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const AddButton = styled.div`
  position: absolute;
  top: 150px;
  right: 50px;

  background-color: #1cb0f6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;


:hover{
  background-color: cornflowerblue;
}
  
`;
