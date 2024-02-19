import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const user = useContext(AuthContext)?.user;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return <div>{user}</div>;
};

export default Avatar;
