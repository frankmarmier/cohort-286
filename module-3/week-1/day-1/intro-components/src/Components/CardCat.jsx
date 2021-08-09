import Card from "./Card";
import Container from "./Container";

const CardCat = (props) => {
  return (
    <Card>
      <Container>
        <div className="Card-avatar">
          <img className="Card-avatar-img" src={props.profileImage} alt="" />
        </div>
        <p className="Card-title">Name: {props.name}</p>
        <p className="Card-info">Human age of the cat: {props.age * 7} </p>
      </Container>
    </Card>
  );
};

export default CardCat;
