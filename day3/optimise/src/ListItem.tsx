import type { FC } from "react";
import { City } from "./App";

type P = {
  city: City;
};
const ListItem: FC<P> = ({ city }) => {
  return <li>{city.nom}</li>;
};

export default ListItem;
