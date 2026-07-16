"use client";
import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { ActionType, StateType } from "@/types/ContextTypes";

const initialState: StateType = {
  sessions: [],
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "ADD_SESSION":
      return {
        ...state,
        sessions: [...state.sessions, action.payload],
      };
    case "DELETE_SESSION":
      return {
        ...state,
        sessions: state.sessions.filter((s) => s.id !== action.payload),
      };
    case "EDIT_SESSION":
      return {
        ...state,
        sessions: state.sessions.map((s) =>
          s.id === action.payload.id ? action.payload : s,
        ),
      };
    case "CLEAR_SESSIONS":
      return {
        ...state,
        sessions: [],
      };
    default:
      return state;
  }
};

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
