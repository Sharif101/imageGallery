import React from "react";

const Singleimage = ({ image, id }) => {
  console.log(id);
  return (
    <div>
      <div key={image} className="image">
        <img src={image} />
      </div>
    </div>
  );
};

export default Singleimage;
