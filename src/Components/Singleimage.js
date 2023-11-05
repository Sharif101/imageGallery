import React from "react";

const Singleimage = ({ image, id, setUrl, cunter }) => {
  return (
    <>
      <div key={image} className="image">
        <img src={image} />
        <input
          type="checkbox"
          name=""
          id=""
          className="check"
          value={image}
          onChange={() => {
            setUrl(image);
            cunter(image);
          }}
        />
      </div>
    </>
  );
};

export default Singleimage;
