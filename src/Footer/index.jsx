import "./style.css";
import leftHand from "../assets/Hand-Left.png";
import rightHand from "../assets/Hand-Right.png";
import icon from "../assets/InstagramIcon.svg";

function Footer() {
  return (
    <footer className="footer">
      <img className="hands" src={leftHand} />
      <div className="footerText">
        <a >
          <img className="footerIcon" alt="Instagram Icon" src={icon} />
        </a>
        <a
          className="footerLink"
          href="https://www.pagemasters.co/"
          target="_blank"
        >
          Background by PageMasters
        </a>
        <a className="footerLink" href="jacques-everiss.com" target="_blank">
          Website by Jacques Everiss
        </a>
      </div>
      <img className="hands" src={rightHand} />
    </footer>
  );
}

export default Footer;
