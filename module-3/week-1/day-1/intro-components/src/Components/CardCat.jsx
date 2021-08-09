import Card from "./Card";
import "../styles/CardCat.css";

// CSS in React is not scoped, even if you import a specific CSS
// file inside a component, the css will leak into the entire App.
// To avoid css leaking outside, we create specific classNames
// in order to avoid the css clashing
// For example .title => ComponentName-title
// This strategy is opiniated. (Not all projects use this strategy)

const CardCat = (props) => {
  return (
    <Card>
      <div className="CardCat-container">
        <div className="CardCat-avatar-container">
          <img className="CardCat-avatar-img" src={props.profileImage} alt="" />
        </div>
        <div>
          <p className="CardCat-title">Name: {props.name}</p>
          <p className="CardCat-info">Human age of the cat: {props.age * 7} </p>
        </div>
      </div>
    </Card>
  );
};

export default CardCat;
