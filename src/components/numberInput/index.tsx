import { Minus, Plus } from "@phosphor-icons/react";
import * as Styled from "./styles";

type Props = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

export function InputNumber({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <Styled.Container>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </Styled.Container>
  );
}
