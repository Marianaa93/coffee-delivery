import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { NavLink } from "react-router-dom";

export function Checkout() {
  return (
    <NavLink to={"/"}>
      <ArrowLeft />
      Voltar
    </NavLink>
  );
}
