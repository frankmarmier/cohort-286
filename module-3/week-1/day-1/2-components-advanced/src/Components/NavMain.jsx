import Avatar from "./Avatar";
import "../styles/NavMain.css";

const NavMain = () => {
  return (
    <nav className="NavMain">
      <div>App Name</div>

      <div>
        <Avatar url="https://media.comicbook.com/2021/05/harambe-meme-photo-nft-sale-auction-1270132-1280x0.jpeg" />
      </div>
    </nav>
  );
};

export default NavMain;
