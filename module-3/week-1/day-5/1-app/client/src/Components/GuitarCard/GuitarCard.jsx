import "./GuitarCard.css";

const GuitarCard = (props) => {
  const { guitar } = props;

  return (
    <div className="CardGuitar">
      <div>
        <img src={guitar.image} alt={guitar.name} />
      </div>
      <p>{guitar.name}</p>
      <p>{guitar.price}</p>
    </div>
  );
};

export default GuitarCard;
