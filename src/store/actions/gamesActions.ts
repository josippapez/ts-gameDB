import axios from "axios";
import { gamesSlice } from "../reducers/games";
import { AppDispatch } from "../store";

export const fetchGames = (page?: number) => {
  return (dispatch: AppDispatch): void => {
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

export const fetchGamesByName = (name: string, page?: number) => {
  return (dispatch: AppDispatch): void => {
    axios({
      method: "GET",
      url: `https://api.rawg.io/api/games?key=${
        process.env.REACT_APP_APIKEY
      }&search=${name}&ordering=-released&page_size=40&page=${page ? page : 1}`,
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

export const setSearchByName = (state: boolean) => {
  return (disaptch: AppDispatch): void => {
    disaptch(gamesSlice.actions.setSearchByName(state));
  };
};
