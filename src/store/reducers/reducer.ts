import { combineReducers } from "@reduxjs/toolkit";
import games from "./games";
import theme from "./theme";

export const reducers = combineReducers({ games, theme });

export type RootState = ReturnType<typeof reducers>;
