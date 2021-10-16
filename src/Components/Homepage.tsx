import GameList from "./GameList/GameList";
import "./Homepage.scss";

const Homepage = (): JSX.Element => {
  return (
    <div className="homepage">
      <GameList />
    </div>
  );
};

export default Homepage;
