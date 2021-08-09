import "../styles/Card.css";

function Card(props) {
  // console.log(props);

  return <div className="Card">{props.children}</div>;
}

export default Card;
