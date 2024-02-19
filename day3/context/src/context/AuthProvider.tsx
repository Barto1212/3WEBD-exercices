import { ReactNode, createContext, useEffect, useState } from "react";
import { getUserLs, setUserLs } from "../lsAccess";

export type User = string | null;
export type AuthContextType = {
  user: User;
  login: (userName: string) => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(getUserLs());
  useEffect(() => {
    setUserLs(user);
  }, [user]);
  const login = (userName: string) => {
    setUser(userName);
  };
  const logOut = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
