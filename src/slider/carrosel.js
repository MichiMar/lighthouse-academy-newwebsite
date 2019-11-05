import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import Image1 from "../img/mathematics.jpg";
import Image2 from "../img/mathclass2.jpg";
import Image3 from "../img/class-time3.jpg";
import Image4 from "../img/class-time4.jpg";
import Image5 from "../img/class-time5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const INITIAL_INDEX = 0;

export const Slide = () => {
  const [index, setIndex] = React.useState(INITIAL_INDEX);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === 4) {
        setIndex(INITIAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Gallery
      style={{
        height: "100vh",
        width: "150vw",
        background: "none"
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage src={image} />
      ))}
    </Gallery>
  );
};
