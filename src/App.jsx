import "./App.css";
import Footer from "./Footer";
import Map from "./Map";
import logo from "./assets/BrocaLogo.png";
// import "./Footer/style.css";


function App() {
  return (
    <main className="mainPage">
      <h1>
        <img className="mainLogo" alt="Broca Cafe" src={logo} />
      </h1>

      <section className="mainText">
        <h2 className="main__subTitle">v good cafe in SE London</h2>
        <div className="address">
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
          Or send us a DM on Instagram
        </p>
      </section>
      <Map />

      <Footer />
    </main>
  );
}

export default App;
