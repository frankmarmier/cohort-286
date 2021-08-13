import GuitarCard from "../GuitarCard/GuitarCard";
import "./GuitarList.css";

const GuitarList = (props) => {
  const { guitars } = props;

  return (
    <ul className="GuitarList">
      {guitars.map((guitar) => {
        return (
          <li key={guitar._id}>
            <GuitarCard guitar={guitar} />
          </li>
        );
      })}
    </ul>
  );
};

export default GuitarList;
