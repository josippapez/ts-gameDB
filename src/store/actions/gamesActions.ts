import axios from "axios";
import { gamesSlice } from "../reducers/games";
import { AppDispatch, AppState } from "../store";

export const fetchGames = (page?: number) => {
  return (dispatch: AppDispatch, getState: AppState): void => {
    axios({
      method: "GET",
      url: `https://api.rawg.io/api/games/lists/main?key=${
        process.env.REACT_APP_APIKEY
      }&ordering=-relevance&page_size=40&page=${page ? page : 1}`,
    })
      .then(response => {
        if (page) {
          dispatch(gamesSlice.actions.addGames(response.data.results));
        } else {
          dispatch(gamesSlice.actions.setGames(response.data.results));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
