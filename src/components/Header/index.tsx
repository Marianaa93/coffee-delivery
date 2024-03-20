import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";
import * as Styled from "./styles";
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme();
  return (
    <Styled.Container>
      <img src={logo} />
      <Styled.RightBox>
        <Styled.CitySpan>
          <MapPin
            size={24}
            color={theme.purple}
          />
          <span>Porto Alegre</span>
        </Styled.CitySpan>
        <Styled.ShoppingCartSpan to={"/checkout"}>
          <ShoppingCart
            size={24}
            color={theme["yellow-dark"]}
          />
        </Styled.ShoppingCartSpan>
      </Styled.RightBox>
    </Styled.Container>
  );
}
