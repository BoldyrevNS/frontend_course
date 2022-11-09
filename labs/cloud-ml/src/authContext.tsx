import { createContext } from "react";

export interface AuthContext{
  authenticated: boolean,
  setAuthenticated (auth: boolean): void
}

const authContext = createContext<AuthContext| null>(null);

export default authContext;