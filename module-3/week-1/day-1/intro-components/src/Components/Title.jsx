import "../styles/Title.css";

const Title = (props) => {
  // props.children will refer to WHATEVER is written between
  // the opening and closing tag of a component

  // <Title>Hello World</Title> => props.children refers to "Hello World"

  // <Title><span>Hey</span> => props.children refers to the span and the textContent

  // <Title><AComponent /></Title> => props.children refers to AComponent

  return <h1 className="Title">{props.children}</h1>;
};

export default Title;
