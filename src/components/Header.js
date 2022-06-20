import { HeaderSC, HeaderContainerSC } from "../stylesComponents/Header.style";
import Nav from "./Nav";
import Product from "./Product";

const Header = () => {
  return (
    <HeaderSC>
      <HeaderContainerSC>
        <Nav />
        {/* <Product /> */}
      </HeaderContainerSC>
    </HeaderSC>
  );
};

export default Header;
