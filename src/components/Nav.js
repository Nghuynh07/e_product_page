import { useState } from "react";
import {
  NavSC,
  NavContainerSC,
  Menu,
  Logo,
  NavLinks,
  NavOverlay,
} from "../stylesComponents/Nav.style";
import {
  Cart,
  CartItem,
  CartItems,
  CartLogo,
} from "../stylesComponents/Cart.style";
import { Profile } from "../stylesComponents/Profile.style";
import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import profile from "../images/image-avatar.png";
import close from "../images/icon-close.svg";

const Nav = () => {
  const [isTrue, setIsTrue] = useState(false);

  const toggleMenu = () => {
    setIsTrue(!isTrue);
  };

  return (
    <NavSC>
      <NavContainerSC>
        {isTrue && <NavOverlay isTrue={isTrue} />}
        <Menu onClick={toggleMenu}>
          {isTrue ? (
            <img src={close} alt='X Icon to close menu' />
          ) : (
            <img src={menu} alt='Menu Icon' />
          )}
        </Menu>
        <Logo>
          <img src={logo} alt='Sneakers Logo in text' />
        </Logo>
        <NavLinks isTrue={isTrue}>
          <a href='#collections'>collections</a>
          <a href='#men'>men</a>
          <a href='#women'>women</a>
          <a href='#about'>about</a>
          <a href='#contact'>contact</a>
        </NavLinks>
        <Cart>
          <CartItems>
            <CartItem />
          </CartItems>
          <CartLogo>
            <img src={cart} alt='Cart Icon' />
          </CartLogo>
          <span>3</span>
        </Cart>
        <Profile>
          <img src={profile} alt='Profile Icon' />
        </Profile>
      </NavContainerSC>
    </NavSC>
  );
};

export default Nav;
