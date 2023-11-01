import React, { useState } from "react";
import "../../style.css";
import Singleimage from "../Singleimage";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  // console.log(selectedImages);

  const onSelectFile = (e) => {
    const seletedFiles = e.target.files;
    const selectFilesArray = Array.from(seletedFiles);
    // console.log(selectFilesArray);

    const imageArray = selectFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    // console.log(imageArray);
    setSelectedImages(imageArray);
    // localStorage.setItem("img", imageArray);
  };

  return (
    <div>
      <label>
        + Add Images
        <br />
        <span>up to 10 images</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, id) => (
            <Singleimage image={image} id={id + 1} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
