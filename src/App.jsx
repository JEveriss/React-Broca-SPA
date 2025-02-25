import "./App.css";
import Footer from "./Footer";
import Map from "./Map";
import logo from "./assets/BrocaLogo.png";

function App() {
  return (
    <main className="mainPage">
      <h1>
        <img className="mainLogo" alt="Broca Cafe" src={logo} />
      </h1>

      <section className="mainText">
        <h2 className="mainSubtitle">
          A very good cafe in South East London <br />
          est. 2007
        </h2>
        <div className="mainAddress">
          <p>Broca</p>
          <p>4 Coulgate Street</p>
          <p>Brockley</p>
          <p>London</p>
          <p>SE4 2RW</p>
        </div>

        <p>Opening Times: 08:00 - 15:30</p>

        <p>
          For any and all enquireies, send an email to TheBrocaCafe@Gmail.com
          <br />
          Or send us a <a href="https://www.instagram.com/thebrocacafe/?hl=en">DM on Instagram</a>
        </p>
      </section>
      <Map />

      <Footer />
    </main>
  );
}

export default App;
