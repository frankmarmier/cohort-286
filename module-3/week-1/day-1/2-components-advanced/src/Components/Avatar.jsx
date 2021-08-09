import "../styles/Avatar.css";

const Avatar = (props) => {
  return (
    <div className="Avatar">
      <img className="Avatar-img" src={props.url} alt="" />
    </div>
  );
};

export default Avatar;
