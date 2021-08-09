import Container from "./Container";
import Avatar from "./Avatar";
import Card from "./Card";

const CardHuman = (props) => {
  return (
    <Container>
      <Card>
        <Avatar url={props.profileImage} />
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.description}</p>
      </Card>
    </Container>
  );
};

export default CardHuman;
