import './style.css'

function Map() {
  return (
    <div className="mapWrapper">
      <h2>Where to find us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.651841534062!2d-0.03948888769554277!3d51.4645484137151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602505ca899df%3A0x42b178b4edc267be!2sThe%20Broca!5e0!3m2!1sen!2suk!4v1710882347261!5m2!1sen!2suk"
        width="600"
        height="600"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
