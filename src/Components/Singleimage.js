import React from "react";

const Singleimage = ({ image, id, handleDelete, setUrl }) => {
  return (
    <>
      <div key={image} className="image">
        <img src={image} />
        {/* <button onClick={() => handleDelete(image)}>dlt</button> */}
        <input
          type="checkbox"
          name=""
          id=""
          className="check"
          onClick={() => setUrl(image)}
        />
      </div>
    </>
  );
};

export default Singleimage;
