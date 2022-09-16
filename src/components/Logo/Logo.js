import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__image" src={logo} alt="logo" />
      <h1 className="logo__title">OnSpirit</h1>
    </div>
  );
};

export default Logo;
