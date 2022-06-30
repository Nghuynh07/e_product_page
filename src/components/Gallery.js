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

const Gallery = ({ isTrue, displayLightbox }) => {
  let current = 0;

  const forEachImg = () => {
    const images = document.querySelectorAll(".img");
    images.forEach((img, index) => {
      img.style.transform = `translateX(${100 * (index - current)}%)`;
    });
  };

  const nextImg = () => {
    current++;
    const images = document.querySelectorAll(".img");
    if (current === images.length) current = 0;
    forEachImg();
  };

  const previousImg = () => {
    current--;
    const images = document.querySelectorAll(".img");
    if (current < 0) current = images.length - 1;
    forEachImg();
  };

  const currentImage = (e) => {
    current = Number(e.target.lastChild.dataset.img);
    forEachImg();
  };

  const isActive = (e) => {
    const thumbNails = document.querySelectorAll(".thumbnail");
    thumbNails.forEach((t) => {
      t.classList.remove("isActive");
    });
    if (e.target.classList.contains("thumbnail")) {
      e.target.classList.add("isActive");
    }
  };

  useEffect(() => {
    nextImg();
    previousImg();
    const images = document.querySelectorAll(".img");
    images.forEach((img, index) => {
      img.style.transform = `translateX(${100 * index}%)`;
    });
    isActive.bind();
  }, []);

  return (
    <GallerySC isTrue={isTrue}>
      <Previous onClick={previousImg}>
        <img src={previous} alt='' />
      </Previous>
      <GalleryContainerSC>
        <ImgSC className='img img-1' data-img='0' onClick={displayLightbox}>
          <img src={productOne} alt='Product 1' />
        </ImgSC>
        <ImgSC className='img img-2' data-img='1' onClick={displayLightbox}>
          <img src={productTwo} alt='Product 2' />
        </ImgSC>
        <ImgSC className='img img-3' data-img='2' onClick={displayLightbox}>
          <img src={productThree} alt='Product 3' />
        </ImgSC>
        <ImgSC className='img img-4' data-img='3' onClick={displayLightbox}>
          <img src={productFour} alt='Product 4' />
        </ImgSC>
      </GalleryContainerSC>
      <Next onClick={nextImg}>
        <img src={next} alt='' />
      </Next>
      <ThumbNails onClick={isActive.bind()}>
        <ThumbNail className='thumbnail' onClick={currentImage}>
          <img
            src={productOneThumbNail}
            data-img='0'
            alt='Thumbnail of a shoe product'
          />
        </ThumbNail>
        <ThumbNail className='thumbnail' onClick={currentImage}>
          <img
            src={productTwoThumbNail}
            data-img='1'
            alt='Thumbnail of a shoe product'
          />
        </ThumbNail>
        <ThumbNail className='thumbnail' onClick={currentImage}>
          <img
            src={productThreeThumbNail}
            data-img='2'
            alt='Thumbnail of a shoe product'
          />
        </ThumbNail>
        <ThumbNail className='thumbnail' onClick={currentImage}>
          <img
            src={productFourThumbNail}
            data-img='3'
            alt='Thumbnail of a shoe product'
          />
        </ThumbNail>
      </ThumbNails>
    </GallerySC>
  );
};

export default Gallery;
