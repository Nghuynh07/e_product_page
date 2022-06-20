import styled from "styled-components";
export const Cart = styled.div`
  position: relative;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    position: absolute;
    right: -8px;
    top: -7px;
    width: 20px;
    height: 15px;
    border-radius: 10px;
    background-color: var(--orange);
    font-weight: bold;
    color: var(--white);
  }
`;
export const CartLogo = styled.div``;

export const CartItems = styled.div`
  position: absolute;
  width: calc(360rem / 16);
  height: calc(256rem / 16);
  top: 60px;
  right: 50%;
  transform: translateX(20.7%);
  background-color: lightgray;
`;

export const CartItem = styled.div``;
