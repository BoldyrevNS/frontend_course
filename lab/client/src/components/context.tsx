import React from "react";
import { IDefaultContextValue } from "../interfaces/IDefaultContextValue";

const DataContext = React.createContext<IDefaultContextValue | null>(null)
export default DataContext; 