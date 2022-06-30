import styled from "styled-components";
export const LightBoxSC = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 0.75);
  z-index: 1;
`;

export const LightBoxContainer = styled.div`
  max-width: calc(550rem / 16);
  min-height: calc(600rem / 16);
  margin: 5rem auto;
  display: grid;
  row-gap: 30px;
`;
export const Image = styled.img`
  justify-self: end;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  width: 1.5rem;
  path {
    fill: var(--orange);
  }
`;
export const LightBoxGallery = styled.div`
  border-radius: 15px;
  overflow: hidden;
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  max-width: calc(550rem / 16);
  min-height: calc(550rem / 16);
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LightBoxThumbNails = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  img {
  }
`;
export const LightBoxThumbNail = styled.div`
  width: 88px;
  height: 88px;
  border: 2px solid transparent;
  border-radius: 15px;
  overflow: hidden;

  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transition: opacity 75ms ease-out;
      opacity: 0.3;
      img {
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;
