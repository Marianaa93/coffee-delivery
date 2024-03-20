import { Hero } from "../../components/Hero";
import * as Styled from "./styles";

import { coffees } from "../../data.json";
import { CoffeeCard } from "../../components/CoffeeCard/CoffeeCard";
export function Home() {
  return (
    <Styled.Container>
      <Hero />
      <Styled.mainDiv>
        <Styled.Title>Nossos cafés</Styled.Title>
        <Styled.CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
            />
          ))}
        </Styled.CoffeeList>
      </Styled.mainDiv>
    </Styled.Container>
  );
}
