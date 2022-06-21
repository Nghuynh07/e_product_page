import { useState } from "react";
import { HeaderSC, HeaderContainerSC } from "../stylesComponents/Header.style";
import Nav from "./Nav";
import Product from "./Product";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <HeaderSC>
      <HeaderContainerSC>
        <Nav isTrue={isTrue} setIsTrue={setIsTrue} />
        <Product isTrue={isTrue} />
      </HeaderContainerSC>
    </HeaderSC>
  );
};

export default Header;
