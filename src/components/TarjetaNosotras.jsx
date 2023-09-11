import React from "react";
import PropTypes from "prop-types";


function Tarjeta({ imageSource, title, text, url }) {
  return (
    <div className="card text-center  animate__animated animate__fadeInUp">
      <div className="overflow">
         <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {text
            ? text
            : "Programadora Full Stack"}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn-outline"
          rel="noreferrer"
        >
          GitHub {title}
        </a>
      </div>
    </div>
  );
}

Tarjeta.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};
        

    

export default Tarjeta