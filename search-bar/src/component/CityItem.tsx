import type { ReactNode, Dispatch } from "react";
import type { FetchCity } from "../services/getCityList";

type P = {
  city: FetchCity;
  setUserInput: Dispatch<React.SetStateAction<string>>;
};

function CityItem({ city, setUserInput }: P): ReactNode {
  return (
    <li className="city-item" onClick={() => setUserInput(city.nom)}>
      {city.nom}
    </li>
  );
}

export default CityItem;
