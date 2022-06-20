import styled from "styled-components";
// Nav
export const NavSC = styled.nav``;

// Nav Container
export const NavContainerSC = styled.div`
  --desktop-breakpoint: 90rem;
  min-height: 12vh;
  padding: 0 var(--mobile-padding);
  display: flex;
  align-items: center;
  gap: 20px;
  @media (min-width: 90rem) {
    padding: 0 var(--desktop-padding);
    gap: 40px;
  }
`;

// Menu
export const Menu = styled.div`
  @media (min-width: 90rem) {
    display: none;
  }
`;

// Logo
export const Logo = styled.div`
  width: 100%;
  & img {
    transform: translateY(-2px);
  }

  @media (min-width: 90rem) {
    width: auto;
  }
`;

// Links
export const NavLinks = styled.div`
  display: none;
  @media (min-width: 90rem) {
    display: flex;
    width: 100%;
  }
`;
