import "./Hero.css";
import { TfiEmail } from "react-icons/tfi";
import { PiTrademarkRegistered } from "react-icons/pi";
import ContactBtn from "../Contact-Btn/ContactBtn";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h1>
            Elizabeth Jane Ross, CIMA
            <PiTrademarkRegistered className="hero-R-icon" />
          </h1>
          <p>
            Senior Vice President, Wealth Management, Financial Advisor, Family
            Wealth Advisor, International Client Advisor
          </p>
          <a href="mailto:advisor.elizabeth.com" className="hero-email-btn">
            <TfiEmail />
          </a>
          <p>
            <span>Direct:</span> (+1(432)246-4294)
          </p>
          <span>
            <ContactBtn />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
