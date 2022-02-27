import "./Headers.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import publish from "../../assets/Icons/publish.svg";

function Header() {
  return (
    <div className="header">
      <img src={brainflixLogo} alt="BrainFlixLogo" className="header__logo" />
      <form>
        <label>
          <div>
            <input type="text" name="SearchBar" placeholder="Search" />
          </div>
        </label>
      </form>
      <button>
        <input className="header__publish-icon" type="image" src={publish} />
        Upload Mobile
      </button>
      <img
        src={avatarImage}
        alt="AvatarPicture"
        className="header__avatarimage"
      />
      <button>Upload Tablet/Desktop</button>
    </div>
  );
}

export default Header;
