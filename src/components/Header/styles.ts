import styled from "styled-components";

export const Container = styled.div`
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
  background-color: ${(props) => props.theme["purple-light"]};
`;

export const ShoppingCartSpan = styled.span`
  display: flex;
  padding: 10px 8px;
  background-color: ${(props) => props.theme["yellow-light"]};
`;
