import React, { useState } from "react";

import { StyledUploadImage } from "./UploadImageStyle";

export const UploadImage = (props) => {
  const [postImage, setPostImage] = useState({
    myFile: "",
  });

  const createImage = (newImage) => console.log(newImage);

  const createPost = async (post) => {
    try {
      await createImage(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
    props.uploadFunction(base64)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="imagine"
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        {/*<button onClick={() => props?.uploadFunction(postImage.myFile)}>*/}
        {/*  Submit*/}
        {/*</button>*/}
      </form>
      <StyledUploadImage
        existingImage={postImage.myFile}
        src={postImage.myFile.length !== 0 && postImage.myFile}
      />
    </>
  );
};
