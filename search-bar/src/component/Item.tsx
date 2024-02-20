import type { ReactNode, Dispatch } from "react";

type P = {
  item: string;
  setUserInput: Dispatch<React.SetStateAction<string>>;
};

export function Item({ item: item, setUserInput }: P): ReactNode {
  return (
    <li className="city-item" onClick={() => setUserInput(item)}>
      {item}
    </li>
  );
}
