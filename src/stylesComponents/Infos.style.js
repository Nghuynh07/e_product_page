import styled from "styled-components";

export const InfosSC = styled.div`
  font-family: var(--font-family);
`;
export const InfosContainerSC = styled.div`
  padding: 25px var(--mobile-padding) 0 var(--mobile-padding);
  display: grid;
  row-gap: 15px;
`;

export const CompanySC = styled.p`
  font-size: var(--12px);
  text-transform: uppercase;
  color: var(--orange);
  font-weight: bold;
  letter-spacing: 3px;
`;
export const MainHeading = styled.h1`
  font-size: var(--28px);
  text-transform: capitalize;
  color: var(--black);
  letter-spacing: 1px;
`;
export const MainText = styled.p`
  font-size: var(--15px);
  color: var(--dark-grayish-blue);
  line-height: 1.8;
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const Pricing = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 16px 0;
`;
export const Price = styled.h2`
  font-size: var(--28px);
`;
export const Discount = styled.p`
  color: var(--orange);
  background-color: #ffeee2;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: bold;
`;
export const ActualPrice = styled.p`
  margin-left: auto;
  text-decoration: line-through;
  color: var(--grayish-blue);
  font-weight: bold;
`;
export const AddToCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const AddItem = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--light-grayish-blue);
  padding: 20px;
  border-radius: 10px;
`;
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  img {
    pointer-events: none;
  }
`;

export const Quantity = styled.p`
  color: var(--black);
  font-weight: bold;
  font-size: var(--16px);
`;

export const Add = styled(Button)`
  background-color: var(--orange);
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  color: var(--white);
  font-weight: bold;
  text-transform: capitalize;
  gap: 10px;
  letter-spacing: 1px;
  font-size: var(--16px);
  border-radius: 10px;

  path {
    fill: var(--white);
  }
`;
