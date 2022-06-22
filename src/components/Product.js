import {
  ProductSC,
  ProductContainerSc,
} from "../stylesComponents/Product.style";
import Gallery from "./Gallery";
import Infos from "./Infos";
const Product = ({ isTrue }) => {
  return (
    <ProductSC>
      <ProductContainerSc>
        <Gallery isTrue={isTrue} />
        <Infos />
      </ProductContainerSc>
    </ProductSC>
  );
};

export default Product;
