import { ContextAction, ContextType } from "./types";

export const initialState: ContextType = {
  user: null,
};

export enum actionTypes {
  SET_USER = "SET USER",
}

const reducer = (state: ContextType, action: ContextAction): ContextType => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
