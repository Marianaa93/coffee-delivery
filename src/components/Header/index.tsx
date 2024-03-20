import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <div>
      <img src={logo} />
      <div>
        <MapPin /> <p>Porto Alegre</p>
      </div>
      <ShoppingCart size={24} />
    </div>
  );
}
