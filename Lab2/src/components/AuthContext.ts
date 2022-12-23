import { createContext } from "react";

export interface AuthContext{
  isAuth: boolean,
  setAuth (auth: boolean): void
}

const authContext = createContext<AuthContext| null>(null);

export default authContext;