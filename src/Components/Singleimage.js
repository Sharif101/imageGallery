import React from "react";

const Singleimage = ({ image, id, setUrl }) => {
  return (
    <>
      <div key={image} className="image">
        <img src={image} />
        <input
          type="checkbox"
          name=""
          id=""
          className="check"
          onChange={() => setUrl(image)}
        />
      </div>
    </>
  );
};

export default Singleimage;
