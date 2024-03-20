import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;

  img {
    margin-top: -20px;
    max-width: 120px;
    max-height: 120px;
    align-self: center;
  }
`;

export const Tags = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  margin-top: 1.25rem;
`;

export const Description = styled.span`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  line-height: 130%;
  color: ${(props) => props.theme["base-label"]};
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  flex: 1;

  span:first-child {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto", sans-serif;
  }

  span:last-child {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }
`;
export const ShoppingCartSpan = styled(NavLink)`
  display: flex;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["white"]};
  margin-left: 0.5rem;
  :hover {
    background-color: ${(props) => props.theme["purple"]};
  }
`;
