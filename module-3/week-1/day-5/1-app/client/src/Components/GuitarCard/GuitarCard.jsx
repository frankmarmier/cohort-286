import "./GuitarCard.css";
import { Link } from "react-router-dom";
const GuitarCard = (props) => {
  const { guitar } = props;

  return (
    <Link to={`/guitars/${guitar._id}`}>
      <div
        className="GuitarCard"
        style={{
          backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
        url("${guitar.image}")`,
        }}
      >
        <div className="GuitarCard__info">
          <p className="GuitarCard__name">{guitar.name}</p>
          <p className="GuitarCard__price">${guitar.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default GuitarCard;
