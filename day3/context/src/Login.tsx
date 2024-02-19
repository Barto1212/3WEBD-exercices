import { FormEvent, useContext, useRef } from "react";
import { AuthContext, AuthContextType } from "./context/AuthProvider";

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { login } = useContext(AuthContext) as AuthContextType;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      login(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <form onSubmit={submit}>
      <input ref={inputRef} type="text" />
      <button>Se connecter</button>
    </form>
  );
};

export default Login;
