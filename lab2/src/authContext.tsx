import { createContext } from "react";

export interface AuthContext{
  auth: boolean,
  setAuth (acc: boolean): void
}

const authContext = createContext<AuthContext| null>(null);

export default authContext;