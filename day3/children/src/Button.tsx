import { ReactNode } from "react";

const SuccessButton = ({ children }: { children: ReactNode }) => {
  return <button style={{ backgroundColor: "green" }}>{children}</button>;
};

export default SuccessButton;
