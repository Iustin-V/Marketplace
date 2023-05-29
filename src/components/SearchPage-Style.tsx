import styled from "styled-components";

export const StyledListing = styled.div`
  height: 200px;
  width: 600px;
  font-family: "Staatliches";

  display: flex;
  flex-direction: row;
  background: hsl(0, 0%, 95%);
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);
`;

export const ListingWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const StyledImg = styled.img`
  height: 200px;
  width: 250px;
  clip-path: polygon(0% 0%, 70% 0, 100% 100%, 0% 100%);
object-fit: cover;
`;
export const ListingData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;
