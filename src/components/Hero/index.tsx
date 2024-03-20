import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import heroImg from "../../assets/heroImg.svg";
import * as Styled from "./styles";

export function Hero() {
  return (
    <Styled.Container>
      <Styled.MainDiv>
        <section>
          <Styled.HeroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </Styled.HeroTitle>
          <Styled.HeroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Styled.HeroSubtitle>
          <Styled.HeroDetailsBox>
            <Styled.HeroDetailsSpan>
              <Styled.IconSpan background='yellow-dark'>
                <ShoppingCart
                  weight='fill'
                  size={"20px"}
                />
              </Styled.IconSpan>
              <p>Compra simples e segura</p>
            </Styled.HeroDetailsSpan>

            <Styled.HeroDetailsSpan>
              <Styled.IconSpan background='base-text'>
                <Package
                  weight='fill'
                  size={"20px"}
                />
              </Styled.IconSpan>
              Embalagem mantém o café intacto
            </Styled.HeroDetailsSpan>
            <Styled.HeroDetailsSpan>
              <Styled.IconSpan background='yellow'>
                <Timer
                  weight='fill'
                  size={"20px"}
                />
              </Styled.IconSpan>
              Entrega rápida e rastreada
            </Styled.HeroDetailsSpan>
            <Styled.HeroDetailsSpan>
              <Styled.IconSpan background='purple'>
                <Coffee
                  weight='fill'
                  size={"20px"}
                />
              </Styled.IconSpan>
              O café chega fresquinho até você
            </Styled.HeroDetailsSpan>
          </Styled.HeroDetailsBox>
        </section>
        <section>
          <img src={heroImg} />
        </section>
      </Styled.MainDiv>
    </Styled.Container>
  );
}
