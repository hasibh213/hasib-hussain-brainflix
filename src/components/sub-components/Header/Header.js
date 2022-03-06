import "./Headers.scss";
import avatarImage from "../../../assets/Images/Mohan-muruge.jpg";
import brainflixLogo from "../../../assets/Logo/BrainFlix-logo.svg";
import publish from "../../../assets/Icons/publish.svg";

function Header() {
  return (
    <div className="header">
      <img src={brainflixLogo} alt="BrainFlixLogo" className="header__logo" />
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
      <button className="header__mobile-button">
        <input className="header__publish-icon" type="image" src={publish} />
        <p className="header__button-text">UPLOAD</p>
      </button>
      <button className="header__tab-desk-button">UPLOAD</button>
      <img
        src={avatarImage}
        alt="AvatarPicture"
        className="header__avatarimage-tab-desk"
      />
    </div>
  );
}

export default Header;
