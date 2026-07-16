import { SessionType } from "./SessionTypes";

export type StateType = {
  sessions: SessionType[];
};

type UpdateAction = {
  type: "ADD_SESSION" | "EDIT_SESSION";
  payload: SessionType;
};

type DeleteAction = {
  type: "DELETE_SESSION";
  payload: string;
};

type ResetAction = {
  type: "CLEAR_SESSIONS";
};

export type ActionType = UpdateAction | DeleteAction | ResetAction;
