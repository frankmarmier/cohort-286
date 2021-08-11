import "./Input.css";

const Input = (props) => {
  const { type = "text", name, id, onChange, value } = props;

  return (
    <input
      className="Input"
      type={type}
      id={id}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default Input;
