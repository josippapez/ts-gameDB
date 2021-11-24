import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Game {
  slug: string;
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  released: string;
  short_screenshots: { id: number; image: string }[];
}
export interface GamesState {
  games: null | Game[];
  searchByName: boolean;
}

const initialState: GamesState = {
  games: null,
  searchByName: false,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setSearchByName: (state, action: PayloadAction<boolean>) => {
      state.searchByName = action.payload;
    },
    setGames: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
    addGames: (state, action: PayloadAction<Game[]>) => {
      const newGames = state.games && [...state.games];
      if (newGames) {
        state.games = newGames?.concat(action.payload);
      }
    },
  },
});

export const { setGames, addGames, setSearchByName } = gamesSlice.actions;

export default gamesSlice.reducer;
