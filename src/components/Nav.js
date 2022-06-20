import {
  NavSC,
  NavContainerSC,
  Menu,
  Logo,
  NavLinks,
} from "../stylesComponents/Nav.style";
import { Cart, CartLogo } from "../stylesComponents/Cart.style";
import { Profile } from "../stylesComponents/Profile.style";
import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import profile from "../images/image-avatar.png";

const Nav = () => {
  return (
    <NavSC>
      <NavContainerSC>
        <Menu>
          <img src={menu} alt='Menu' />
        </Menu>
        <Logo>
          <img src={logo} alt='Sneakers Logo in text' />
        </Logo>
        <NavLinks>
          <a href='#collections'>collections</a>
          <a href='#men'>men</a>
          <a href='#women'>women</a>
          <a href='#about'>about</a>
          <a href='#contact'>contact</a>
        </NavLinks>
        <Cart>
          <CartLogo>
            <img src={cart} alt='Cart Icon' />
          </CartLogo>
        </Cart>
        <Profile>
          <img src={profile} alt='Profile Icon' />
        </Profile>
      </NavContainerSC>
    </NavSC>
  );
};

export default Nav;
