import styled from "styled-components";


export const StyledUploadImage = styled.img<{ existingImage?: boolean }>`
  width: 300px;
  margin-top: 30px;
  ${(props) =>
    props.existingImage && `border: 5px solid blue;`}
`;
