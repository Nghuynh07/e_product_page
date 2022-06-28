import styled from "styled-components";

export const ProductSC = styled.div``;
export const ProductContainerSc = styled.div`
  @media (min-width: 90rem) {
    padding: 65px var(--desktop-padding);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;
