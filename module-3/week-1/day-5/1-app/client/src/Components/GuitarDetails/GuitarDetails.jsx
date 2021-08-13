import "./GuitarDetails.css";

const GuitarDetails = (props) => {
  const { guitar } = props;

  return (
    <div
      className="GuitarDetails"
      style={{
        backgroundImage: `url("${guitar.image}")`,
      }}
    >
      <div className="GuitarDetails__content">
        <div className="GuitarDetails__img-container">
          <img
            className="GuitarDetails__img"
            src={guitar.image}
            alt={guitar.name}
          />
        </div>
        <div className="GuitarDetails_info">
          <div>
            <h2 className="GuitarDetails__title">{guitar.name}</h2>
            <p className="GuitarDetails__description">{guitar.description}</p>
          </div>
          <div className="GuitarDetails__info-bottom">
            <p className="GuitarDetails__price">${guitar.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuitarDetails;
