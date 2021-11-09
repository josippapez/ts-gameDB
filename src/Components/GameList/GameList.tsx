import { useEffect, useRef } from "react";
import { fetchGames } from "../../store/actions/gamesActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Game } from "../../store/reducers/games";
import GameItem from "./GameItem/GameItem";
import "./GameList.scss";

const GameList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const GamesList = useAppSelector(state => state.games.games);
  const gameList = useRef(null);
  let gamesColumns: JSX.Element[][] = [];

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  if (gameList && gameList.current) {
    gamesColumns = [];
    const listRef = gameList.current as unknown as HTMLElement;
    const numberOfColumns = Math.round(listRef.scrollWidth / 340);
    console.log(numberOfColumns);

    if (gamesColumns.length !== numberOfColumns) {
      gamesColumns = [];
      for (let index = 0; index < numberOfColumns; index++) {
        gamesColumns.push([]);
      }
    }
    if (gamesColumns.length === numberOfColumns) {
      GamesList?.map((game: Game, gameIndex: number): void => {
        if ((gameIndex + 1) % numberOfColumns === 0) {
          gamesColumns[numberOfColumns - 1].push(
            <GameItem key={Math.random()} game={game} />
          );
        }
        for (let index = numberOfColumns - 1; index > 0; index--) {
          if ((gameIndex + 1) % numberOfColumns === index) {
            gamesColumns[index - 1].push(
              <GameItem key={gameIndex} game={game} />
            );
          }
        }
      });
    }
  }

  return (
    <div className="game-list" ref={gameList}>
      {gamesColumns.map((column, index) => (
        <div key={index} className="game-list__column">
          {column}
        </div>
      ))}
    </div>
  );
};

export default GameList;
