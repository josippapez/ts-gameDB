import { useRef } from "react";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { fetchGames } from "./store/actions/gamesActions";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme);

  const page = useRef(1);

  return (
    <div
      className={`App ${theme.theme ? "darkmode" : "lightmode"}`}
      onScroll={e => {
        const element = e.target as Element;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          dispatch(fetchGames(page.current + 1));
          page.current += 1;
        }
      }}
    >
      <Navbar />
      <Homepage />
    </div>
  );
};

export default App;
