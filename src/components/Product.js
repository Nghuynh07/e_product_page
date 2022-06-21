import {
  ProductSC,
  ProductContainerSc,
} from "../stylesComponents/Product.style";
import Gallery from "./Gallery";
const Product = ({ isTrue }) => {
  return (
    <ProductSC>
      <ProductContainerSc>
        <Gallery isTrue={isTrue} />
      </ProductContainerSc>
    </ProductSC>
  );
};

export default Product;
