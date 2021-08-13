import "./FormField.css";

const FormField = (props) => {
  const { label, htmlFor, children } = props;

  return (
    <div className="FormField">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
};

export default FormField;
