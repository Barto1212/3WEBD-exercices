import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextType } from "./context/AuthProvider";

const NavBar = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/settings">Réglages</Link>
        </li>
        {user && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default NavBar;
