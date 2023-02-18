import { actionTypes } from "./reducer";

export interface ContextType {
  user: {} | null;
}

export interface ContextAction {
  type: actionTypes;
  payload: ContextType;
}
