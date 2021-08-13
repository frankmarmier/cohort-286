import "./Button.css";

const Button = (props) => {
  const { type = "submit", children } = props;

  return (
    <button className="Button" type={type}>
      {children}
    </button>
  );
};

export default Button;
