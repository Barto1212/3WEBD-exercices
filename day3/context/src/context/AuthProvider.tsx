import { ReactNode, createContext, useState } from "react";

type User = string | null;
const defaultUser: User = null;
export type AuthContextType = {
  user: User;
  login: (userName: string) => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);
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
