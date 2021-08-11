import "./NavMain.css";
import trolley from "../../Assets/trolley.svg";

const NavMain = (props) => {
  console.log("here");
  console.log(props);
  return (
    <nav
      onClick={props.onClick}
      style={{
        backgroundColor: props.isClicked ? "black" : "white",
        color: props.isClicked ? "white" : "black",
      }}
      className="NavMain"
    >
      <a href="/">AppName</a>

      <div className="cart">
        <img className="trolley" src={trolley} alt="" />
      </div>
    </nav>
  );
};

export default NavMain;
