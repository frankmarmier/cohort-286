import "../styles/Container.css";

const Container = (props) => {
  return <div className="Container">{props.children}</div>;
};

export default Container;