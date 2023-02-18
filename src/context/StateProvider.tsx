import reducer, { initialState } from "./reducer";
import { createContext, useReducer } from "react";
import { ContextType } from "./types";

const StateContext = createContext<ContextType>(initialState);

export const StateProvider = ({ children }: { children?: JSX.Element }) => (
  <StateContext.Provider value={initialState}>{children}</StateContext.Provider>
);

export const useContextValue = () => useReducer(reducer, initialState);
