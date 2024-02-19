import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const Avatar = () => {
  const user = useContext(AuthContext)?.user;
  if (!user) {
    return null;
  }
  return <div>{user}</div>;
};

export default Avatar;
