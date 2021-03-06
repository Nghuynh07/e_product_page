import { useState } from "react";
import { HeaderSC, HeaderContainerSC } from "../stylesComponents/Header.style";
import { LineSC } from "../stylesComponents/Line.style";
import Nav from "./Nav";
import Product from "./Product";

const Header = ({ displayLightbox }) => {
  const [isTrue, setIsTrue] = useState(null);
  return (
    <HeaderSC>
      <HeaderContainerSC>
        <Nav isTrue={isTrue} setIsTrue={setIsTrue} />
        <LineSC />
        <Product isTrue={isTrue} displayLightbox={displayLightbox} />
      </HeaderContainerSC>
    </HeaderSC>
  );
};

export default Header;
