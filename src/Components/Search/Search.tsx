import { useRef } from "react";
import { fetchGames, fetchGamesByName } from "../../store/actions/gamesActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchByName } from "../../store/reducers/games";
import "./Search.scss";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const Search = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const searchByName = useAppSelector(state => state.games.searchByName);
  const searchValue = useRef("");

  return (
    <input
      className="search-input"
      type="text"
      defaultValue={searchValue.current}
      onChange={e => {
        if (e.target.value === "") {
          dispatch(setSearchByName(false));
        }
        if (e.target.value !== "" && !searchByName) {
          dispatch(setSearchByName(true));
        }
        searchValue.current = e.target.value;
      }}
      onKeyDown={e => {
        if (e.key === "Enter") {
          if (searchValue.current !== "") {
            dispatch(fetchGamesByName(searchValue.current));
          } else {
            dispatch(fetchGames());
          }
        }
      }}
    />
  );
};

export default Search;
