import cafe from "../assets/brocaBuilding.png";

function Content() {
  return (
    <section className="contentWrapper">
      <div className="contentText">
        <address className="contentAddress">
          3-4 Coulgate Street
          <br />
          Brockley
          <br />
          London
          <br />
          SE4 2RW
          <br />
        </address>

        <p className="contentOPeningTimes">Open from <br/>
         08:00 - 15:30
         <br/>
         Everyday
         </p>
      </div>

      <img src={cafe} />
      <p className="contentEnquiries">
        For any and all enquiries, send an email to TheBrocaCafe@Gmail.com
        <br />
        Or send us a{" "}
        <a href="https://www.instagram.com/thebrocacafe/?hl=en">
          DM on Instagram
        </a>
      </p>
    </section>
  );
}

export default Content;
