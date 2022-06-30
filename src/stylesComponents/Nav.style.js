import styled from "styled-components";
// Nav
export const NavSC = styled.nav``;

// Nav Container
export const NavContainerSC = styled.div`
  min-height: 8vh;
  padding: 0 var(--mobile-padding);
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  @media (min-width: 90rem) {
    padding: 0 var(--desktop-padding);
    gap: 40px;
    min-height: 12vh;
  }
`;

// Menu
export const Menu = styled.div`
  z-index: 100;
  cursor: pointer;
  img {
    pointer-events: none;
  }
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
  font-family: "Kumbh Sans", sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0 var(--mobile-padding);
  padding-top: 12vh;
  gap: 25px;
  background-color: var(--white);
  min-width: 70%;
  min-height: 100vh;
  transform: ${(props) =>
    props.isTrue ? `translateX(0)` : `translateX(-100%)`};
  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: transform 0.2s ease-in-out;
    transition-delay: 100ms;
  }
  & a {
    text-transform: capitalize;
    font-weight: bold;
    color: var(--very-dark-blue);
    position: relative;
    @media (min-width: 90rem) {
      font-family: "Kumbh Sans", sans-serif;
      font-weight: normal;
      color: var(--dark-grayish-blue);
      /* &::before {
        position: absolute;
        content: "";
        width: 0;
        height: 3px;
        background-color: var(--orange);
        bottom: -2.85rem;
        opacity: 0;
      } */
    }
  }

  @media (min-width: 90rem) {
    all: initial;
    display: flex;
    width: 100%;
    gap: 40px;
  }
`;

export const NavOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: ${(props) =>
    props.isTrue
      ? `scale(1)`
      : `scale
  (0)`};
  background-color: rgba(0 0 0 / 0.75);

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.2s ease-in-out;
    transition-delay: 25ms;
  }
`;
