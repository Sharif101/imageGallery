import React, { useState } from "react";
import "../../style.css";
import Singleimage from "../Singleimage";

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [url, setUrl] = useState([]);

  const onSelectFile = (e) => {
    const seletedFiles = e.target.files;
    const selectFilesArray = Array.from(seletedFiles);

    const imageArray = selectFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imageArray);
  };

  const handleDelete = (image) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  };

  return (
    <div className="container">
      <h3 className="title">Image-Gallery</h3>
      <hr className="border" />
      <div className="showDlt">
        {url.length > 0 && <p>{url.length} seleted files</p>}
        {url.length !== 0 && (
          <button className="btn" onClick={() => handleDelete(url)}>
            delete
          </button>
        )}
      </div>

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, id) => (
            <Singleimage image={image} id={id + 1} setUrl={setUrl} />
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
