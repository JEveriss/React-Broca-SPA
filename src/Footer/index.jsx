import "./style.css";
import leftHand from "../assets/Hand-Left.png";
import rightHand from "../assets/Hand-Right.png";
import icon from "../assets/InstagramIcon.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="hands" src={leftHand} />
      <div className="footerText">
        <a
          href="https://www.instagram.com/thebrocacafe/?hl=en"
          target="_blank"
        >
          <img className="footerIcon" alt="Instagram Icon" src={icon} />
        </a>
        <a
          className="footerLink"
          href="https://www.pagemasters.co/"
          target="_blank"
        >
          Background artwork by PageMasters
        </a>
        <a
          className="footerLink"
          href="https://www.jacques-everiss.com"
          target="_blank"
        >
          Website by Jacques Everiss
        </a>
      </div>
      <img className="hands" src={rightHand} />
    </div>
  );
}

export default Footer;
