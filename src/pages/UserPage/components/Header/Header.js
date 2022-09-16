import logo from "../../../../assets/logo.svg"
import iconSearch from "../../../../assets/icon-search.svg";

const Header = () => {
	return (
    <header className="header">
      <div className="header__logo">
        <img className="header__image" src={logo} alt="logo" />
        <span className="header__title">OnSpirit</span>
      </div>
      <label className="header__field">
        <input
          className="header__input"
          type="search"
          name="search"
          placeholder="поиск"
        />
				<input className="header__search-button" type="image" src={iconSearch} alt="search button" />
      </label>
      <button className="header__button">срочная заявка</button>
    </header>
  );
}

export default Header