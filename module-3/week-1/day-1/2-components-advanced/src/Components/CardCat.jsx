import Card from "./Card";
import Avatar from "./Avatar";
import Container from "./Container";

const CardCat = (props) => {
  console.log("this is props", props);
  return (
    <Container>
      <Card>
        <Avatar url={props.profileImage} />
        <h2>{props.name}</h2>
        <p>Human age: {props.age * 7}</p>
      </Card>
    </Container>
  );
};

export default CardCat;
