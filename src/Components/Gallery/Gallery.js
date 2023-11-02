import React, { useState } from "react";
import "../../style.css";
import Singleimage from "../Singleimage";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [value, setVaule] = useState("");
  const [url, setUrl] = useState("");
  // console.log(url);

  const onSelectFile = (e) => {
    const seletedFiles = e.target.files;
    const selectFilesArray = Array.from(seletedFiles);
    // console.log(selectFilesArray);

    const imageArray = selectFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    // console.log(imageArray);
    setSelectedImages(imageArray);
  };

  // const handleDelete = (id) => {
  //   setVaule(id);
  // };
  const handleDelete = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  };

  return (
    <div className="container">
      {url.length !== 0 && (
        <button onClick={() => handleDelete(url)}>delete</button>
      )}
      <div className="images">
        {selectedImages &&
          selectedImages.map((image, id) => (
            <Singleimage
              image={image}
              id={id + 1}
              // handleDelete={handleDelete}
              setUrl={setUrl}
            />
          ))}
        <label>
          + Add Images
          <br />
          <span>up to 10 images</span>
          <input
            className="fileInpt"
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
      </div>
    </div>
  );
};

export default Gallery;
