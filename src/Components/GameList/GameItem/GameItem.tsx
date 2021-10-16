import { useState } from "react";
import { Game } from "../../../store/reducers/games";
import "./GameItem.scss";

interface Props {
  game: Game;
}

const GameItem = (props: Props): JSX.Element => {
  const { game } = props;
  const [displayExtension, setDisplayExtension] = useState(false);
  return (
    <div
      className="game-item"
      onMouseEnter={() => {
        setDisplayExtension(true);
      }}
      onMouseLeave={() => {
        setDisplayExtension(false);
      }}
    >
      <div
        className="game-item__screenshot"
        style={{ backgroundImage: `url(${game.short_screenshots[0].image})` }}
      />
      <div className="game-item__body">
        <div className="game-item__body__main-body">
          <div className="game-item__body__text main-text">{game.name}</div>
        </div>
      </div>

      <div className="game-item__body__extension">
        {displayExtension && (
          <div>
            <div className="game-item__body__text">
              Released: {new Date(game.released).toLocaleDateString("hr")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameItem;
