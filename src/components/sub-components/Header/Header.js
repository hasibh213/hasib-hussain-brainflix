import "./Headers.scss";
import avatarImage from "../../../assets/Images/Mohan-muruge.jpg";
import brainflixLogo from "../../../assets/Logo/BrainFlix-logo.svg";
import publish from "../../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to={"/videos/84e96018-4022-434e-80bf-000ce4cd12b8"}>
        <div>
          <img
            src={brainflixLogo}
            alt="BrainFlixLogo"
            className="header__logo"
          />
        </div>
      </Link>
      <div className="header__part">
        <form className="header__form">
          <label className="header__label">
            <div>
              <input
                className="header__search-bar"
                type="text"
                name="SearchBar"
                placeholder="Search"
              />
            </div>
          </label>
        </form>
        <img
          src={avatarImage}
          alt="AvatarPicture"
          className="header__avatarimage-mob"
        />
      </div>
      <Link to="/upload-page">
        <button className="header__mobile-button">
          <input className="header__publish-icon" type="image" src={publish} />
          <p className="header__button-text">UPLOAD</p>
        </button>
      </Link>
      <Link to="/upload-page">
        <button className="header__tab-desk-button">UPLOAD</button>
      </Link>
      <img
        src={avatarImage}
        alt="AvatarPicture"
        className="header__avatarimage-tab-desk"
      />
    </div>
  );
}

export default Header;
