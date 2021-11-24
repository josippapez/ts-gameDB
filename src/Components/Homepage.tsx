import GameList from "./GameList/GameList";
import "./Homepage.scss";
import Search from "./Search/Search";

const Homepage = (): JSX.Element => {
  return (
    <div className="homepage">
      <Search />
      <GameList />
    </div>
  );
};

export default Homepage;
