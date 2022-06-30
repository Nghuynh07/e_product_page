import {
  ProductSC,
  ProductContainerSc,
} from "../stylesComponents/Product.style";
import Gallery from "./Gallery";
import Infos from "./Infos";
const Product = ({ isTrue, displayLightbox }) => {
  return (
    <ProductSC>
      <ProductContainerSc>
        <Gallery isTrue={isTrue} displayLightbox={displayLightbox} />
        <Infos />
      </ProductContainerSc>
    </ProductSC>
  );
};

export default Product;
