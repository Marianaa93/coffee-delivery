import { styled } from "styled-components";
import { defaultTheme } from "../../styles/themes/defaultTheme";
import heroBg from "../../assets/hero-bg.svg";

export const Container = styled.div`
  background-image: url(${heroBg});
`;

export const MainDiv = styled.div`
  display: flex;
  margin: 32px auto;
  max-width: 1160px;
`;
export const HeroTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 3rem;
`;

export const HeroSubtitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
`;

export const HeroDetailsBox = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1.25rem;
`;

export const HeroDetailsSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

type keys = keyof typeof defaultTheme;
interface IconSpanProps {
  background: keys;
}
export const IconSpan = styled.span<IconSpanProps>`
  border-radius: 50%;
  display: inline-block;

  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  background-color: ${(props) => props.theme[props.background]};
`;
