import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleTheme } from "../../../store/reducers/theme";
import ButtonFlow from "../../ButtonFlow/ButtonFlow";
import "./Navbar.scss";

const Navbar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme);

  return (
    <div className="navbar">
      <ButtonFlow
        height={40}
        width={80}
        buttonText={`${theme.theme ? `🌙` : `🌞`}`}
        onclick={() => {
          dispatch(toggleTheme());
        }}
      />
    </div>
  );
};

export default Navbar;
