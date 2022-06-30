import {
  LightBoxSC,
  LightBoxContainer,
  LightBoxGallery,
  ImgBox,
  LightBoxThumbNails,
  LightBoxThumbNail,
  Image,
} from "../stylesComponents/Lightbox.style";

import close from "../images/icon-close.svg";
import productOne from "../images/image-product-1.jpg";
import productTwo from "../images/image-product-2.jpg";
import productThree from "../images/image-product-3.jpg";
import productFour from "../images/image-product-4.jpg";
import thumbnailOne from "../images/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../images/image-product-2-thumbnail.jpg";
import thumbnailThree from "../images/image-product-3-thumbnail.jpg";
import thumbnailFour from "../images/image-product-4-thumbnail.jpg";

const Lightbox = ({ closeLightbox }) => {
  return (
    <LightBoxSC>
      <LightBoxContainer>
        <Image
          style={{ cursor: "pointer" }}
          src={close}
          alt='Close Icon'
          onClick={closeLightbox}
        />
        <LightBoxGallery>
          <img className='lightbox__img-1' src={productOne} alt='Product One' />
          <img className='lightbox__img-2' src={productTwo} alt='Product One' />
          <img
            className='lightbox__img-3'
            src={productThree}
            alt='Product One'
          />
          <img
            className='lightbox__img-4'
            src={productFour}
            alt='Product One'
          />
        </LightBoxGallery>
        <LightBoxThumbNails>
          <LightBoxThumbNail>
            <img src={thumbnailOne} alt='Product Thumbnail' />
          </LightBoxThumbNail>
          <LightBoxThumbNail>
            <img src={thumbnailTwo} alt='Product Thumbnail' />
          </LightBoxThumbNail>
          <LightBoxThumbNail>
            <img src={thumbnailThree} alt='Product Thumbnail' />
          </LightBoxThumbNail>
          <LightBoxThumbNail>
            <img src={thumbnailFour} alt='Product Thumbnail' />
          </LightBoxThumbNail>
        </LightBoxThumbNails>
      </LightBoxContainer>
    </LightBoxSC>
  );
};

export default Lightbox;
