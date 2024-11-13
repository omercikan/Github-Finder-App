import React from "react";

const Loader = () => {
  return (
    <div className="spinner-wrapper w-100 mt-3">
      <div className="spinner-grow text-white">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
