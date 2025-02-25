import "./style.css";
import leftHand from "../assets/Hand-Left.png";
import rightHand from "../assets/Hand-Right.png";
import icon from "../assets/InstagramIcon.svg";

function Footer() {
  return (
    <footer className="footerWrapper">
      <img className="hands" src={leftHand} />
      <div className="footerTextBlock">
        <a href="https://www.instagram.com/thebrocacafe/?hl=en" target="_blank">
          <img className="footerIcon" alt="Instagram Icon" src={icon} />
          <p className="footerTextSmall">Instagram</p>
        </a>
        <a
          className="footerLink"
          href="https://www.pagemasters.co/"
          target="_blank"
        >
          <p className="footerLinkText"> Background artwork by PageMasters</p>
          <p className="footerTextSmall">PageMasters</p>
        </a>
        <a
          className="footerLink"
          href="https://www.jacques-everiss.com"
          target="_blank"
        >
          <p className="footerLinkText">Website by Jacques Everiss</p>
          <p className="footerTextSmall">J.Everiss</p>
        </a>
      </div>
      <img className="hands" src={rightHand} />
    </footer>
  );
}

export default Footer;
