import {
  GallerySC,
  GalleryContainerSC,
  ImgSC,
  Next,
  Previous,
  ThumbNails,
  ThumbNail,
} from "../stylesComponents/Gallery.style";
import productOne from "../images/image-product-1.jpg";
import productTwo from "../images/image-product-2.jpg";
import productThree from "../images/image-product-3.jpg";
import productFour from "../images/image-product-4.jpg";
import previous from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import { useEffect } from "react";
import productOneThumbNail from "../images/image-product-1-thumbnail.jpg";
import productTwoThumbNail from "../images/image-product-2-thumbnail.jpg";
import productThreeThumbNail from "../images/image-product-3-thumbnail.jpg";
import productFourThumbNail from "../images/image-product-4-thumbnail.jpg";

const Gallery = ({ isTrue }) => {
  let current = 0;
  const images = document.querySelectorAll(".img");

  const nextImg = () => {
    current++;
    if (current === images.length) current = 0;

    images.forEach((img, index) => {
      img.style.transform = `translateX(${100 * (index - current)}%)`;
    });
  };

  const previousImg = () => {
    current--;

    if (current < 0) current = images.length - 1;

    images.forEach((img, index) => {
      img.style.transform = `translateX(${100 * (index - current)}%)`;
    });
  };

  const keyDownEvent = (e) => {
    if (e.key === "ArrowRight") nextImg();
    e.key === "ArrowLeft" && previousImg();
  };

  useEffect(() => {
    images.forEach((img, index) => {
      img.style.transform = `translateX(${100 * index}%)`;
    });
    document.addEventListener("keydown", keyDownEvent.bind());
  }, []);

  return (
    <GallerySC isTrue={isTrue}>
      <Previous onClick={previousImg}>
        <img src={previous} alt='' />
      </Previous>
      <GalleryContainerSC>
        <ImgSC className='img img-1' data-img='0'>
          <img src={productOne} alt='Product 1' />
        </ImgSC>
        <ImgSC className='img img-2' data-img='1'>
          <img src={productTwo} alt='Product 2' />
        </ImgSC>
        <ImgSC className='img img-3' data-img='2'>
          <img src={productThree} alt='Product 3' />
        </ImgSC>
        <ImgSC className='img img-4' data-img='3'>
          <img src={productFour} alt='Product 4' />
        </ImgSC>
      </GalleryContainerSC>
      <Next onClick={nextImg}>
        <img src={next} alt='' />
      </Next>
      <ThumbNails>
        <ThumbNail>
          <img src={productOneThumbNail} alt='Thumbnail of a shoe product' />
        </ThumbNail>
        <ThumbNail>
          <img src={productTwoThumbNail} alt='Thumbnail of a shoe product' />
        </ThumbNail>
        <ThumbNail>
          <img src={productThreeThumbNail} alt='Thumbnail of a shoe product' />
        </ThumbNail>
        <ThumbNail>
          <img src={productFourThumbNail} alt='Thumbnail of a shoe product' />
        </ThumbNail>
      </ThumbNails>
    </GallerySC>
  );
};

export default Gallery;
