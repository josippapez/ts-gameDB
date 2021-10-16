import "./ButtonFlow.scss";

interface Props {
  buttonText?: string;
  onclick(): void;
  height: number;
  width: number;
}

const ButtonFlow = (props: Props): JSX.Element => {
  return (
    <button
      className="button-flow"
      style={{
        ["--height" as string]: `${props.height}px`,
        ["--width" as string]: `${props.width}px`,
      }}
      onClick={() => props.onclick()}
    >
      <div className="button-flow__text">{props.buttonText}</div>
      <div className="button-flow__colored-background" />
      <div className="button-flow__background" />
    </button>
  );
};

export default ButtonFlow;
