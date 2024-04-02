import { useState } from "react";

const useImageLoader = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return {
    imageLoaded,
    handleImageLoaded,
  };
};

export default useImageLoader;
