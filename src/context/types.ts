import { actionTypes } from "./reducer";

export interface User {
  email: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  iat: number;
  token: string;
}

export interface ContextType {
  user: User | null;
}

export interface ContextAction {
  type: actionTypes;
  payload: User;
}
