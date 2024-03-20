import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1160px;
  padding: 0 20px 32px 0;
  margin: 32px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CitySpan = styled.span`
  display: flex;
  padding: 10px 8px;
  border-radius: 5px;

  background-color: ${(props) => props.theme["purple-light"]};
`;

export const ShoppingCartSpan = styled(NavLink)`
  display: flex;
  padding: 10px 8px;
  border-radius: 5px;
  background-color: ${(props) => props.theme["yellow-light"]};
`;
