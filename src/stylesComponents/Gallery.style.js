import styled from "styled-components";

export const GallerySC = styled.div`
  position: relative;
  z-index: ${(props) => (props.isTrue ? -1 : 0)};
`;
export const GalleryContainerSC = styled.div`
  display: grid;
  overflow: hidden;
`;
export const ImgSC = styled.div`
  grid-column: 1 / -1;
  grid-row: 1/ 2;
  max-height: 300px;
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 300ms cubic-bezier(0.9, 0.11, 0.86, 0.39);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GalleryNav = styled.div`
  position: absolute;
  top: 50%;
  background-color: var(--white);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  isolation: isolate;
  img {
    pointer-events: none;
  }
`;

export const Next = styled(GalleryNav)`
  right: 0;
  transform: translate(-30%, -50%);
`;
export const Previous = styled(GalleryNav)`
  left: 0;
  z-index: 1;
  transform: translate(30%, -50%);
`;
