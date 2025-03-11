import logo from "../assets/BrocaLogo.png";
function Logo() {
  return (
    <div>
      <h1>
        <img className="logoImage" alt="Broca Cafe" src={logo} />
      </h1>
      <h2 className="logoSubtitle">
        A very good cafe in South East London <br />
        est. 2007
      </h2>
    </div>
  );
}

export default Logo;
