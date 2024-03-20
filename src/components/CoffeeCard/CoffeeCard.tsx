import { ShoppingCartSimple } from "@phosphor-icons/react";
import * as Styled from "./styles";
import { InputNumber } from "../numberInput";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};
export function CoffeeCard({ coffee }: Props) {
  return (
    <Styled.Card>
      <img src={coffee.image} />
      <Styled.Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Styled.Tags>

      <Styled.Title>{coffee.title}</Styled.Title>
      <Styled.Description>{coffee.description}</Styled.Description>

      <Styled.OrderContainer>
        <Styled.Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Styled.Price>
        <InputNumber
          quantity={0}
          incrementQuantity={function (): void {
            throw new Error("Function not implemented.");
          }}
          decrementQuantity={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Styled.ShoppingCartSpan to='/checkout'>
          <ShoppingCartSimple
            size={"20px"}
            weight='fill'
          />
        </Styled.ShoppingCartSpan>
      </Styled.OrderContainer>
    </Styled.Card>
  );
}
