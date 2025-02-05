import "./App.css";
import Footer from "./Footer";
import logo from "./assets/BrocaLogo.png";
import "./Footer/style.css";

function App() {
  return (
    <div className="mainPage">
      <h1 className="mainLogo">
        <img alt="Broca Cafe" src={logo} />
      </h1>
      <h2>v good cafe in SE London</h2>
      <div className="address">
        <p>Broca</p>
        <p>3-4 Coulgate Street</p>
        <p>Brockley</p>
        <p>London</p>
        <p>SE4 XXX</p>
      </div>
      <div className="address">
        <p>Broca</p>
        <p>3-4 Coulgate Street</p>
        <p>Brockley</p>
        <p>London</p>
        <p>SE4 XXX</p>
      </div>
      <div className="address">
        <p>Broca</p>
        <p>3-4 Coulgate Street</p>
        <p>Brockley</p>
        <p>London</p>
        <p>SE4 XXX</p>
      </div>
      <div className="address">
        <p>Broca</p>
        <p>3-4 Coulgate Street</p>
        <p>Brockley</p>
        <p>London</p>
        <p>SE4 XXX</p>
      </div>
      <div className="address">
        <p>Broca</p>
        <p>3-4 Coulgate Street</p>
        <p>Brockley</p>
        <p>London</p>
        <p>SE4 XXX</p>
      </div>
      <p>Opening Times: 08:00 - 15:30</p>
      <div>
        <h2>Where to find us</h2>
        <div className="mapWrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.651841534062!2d-0.03948888769554277!3d51.4645484137151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602505ca899df%3A0x42b178b4edc267be!2sThe%20Broca!5e0!3m2!1sen!2suk!4v1710882347261!5m2!1sen!2suk"
            width="600"
            height="600"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
