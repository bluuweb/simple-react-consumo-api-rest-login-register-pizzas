import imgLoading from "../assets/pizza-loading.gif";
import useImageLoader from "../hooks/useImageLoader";

import PropTypes from "prop-types";

export const ImageWithLoading = ({
  img,
  className,
  height = 200,
  alt = "img",
}) => {
  // Custom hook
  const { imageLoaded, handleImageLoaded } = useImageLoader();

  return (
    <>
      {!imageLoaded && (
        <img
          className="card-img-top"
          src={imgLoading}
          alt="pizza loading"
          height={height}
          style={{ objectFit: "cover" }}
        />
      )}
      <img
        className={className}
        src={img}
        alt={alt}
        onLoad={handleImageLoaded}
      />
    </>
  );
};

ImageWithLoading.propTypes = {
  img: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  alt: PropTypes.string,
};
