import React from "react";
import { useState } from "react";
import "./Faqs.css";
import { IoChevronDown } from "react-icons/io5";

const Faq = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  const faqDescription = [""];
  return (
    <>
      <div className="faq">
        <p className="faq_title">
          <span>{props.title}</span>
          <span onClick={toggleText}>
            <IoChevronDown />
          </span>
        </p>
        {isVisible && <p className="faq_description">{props.description}</p>}
      </div>
    </>
  );
};

const Faqs = () => {
  return (
    <>
      <div className="faqs">
        <div>Frequently asked questions</div>
        <div>
          <p>
            <Faq
              title="Why Investing?"
              description="The earlier you start investing, the longer your money will be able to work in your favor! Get started investing as soon as you start earning your first penny!, One of the main benefits of investing is that the money you invest has the potential to grow substantially over time. Rather than just putting your money into a savings account to save for the future, investing is can be a much smarter way to make your money work for you."
            />
          </p>
          <p>
            <Faq
              title="Is it better to save or invest?"
              description="Investing provides the potential for (significantly) higher returns than saving. As your investments grow, they allow you to take advantage of compounding to accelerate gains. Investing offers many different access points and strategies, from individual stocks and bonds to mutual or exchange-traded funds."
            />
          </p>
          <p>
            <Faq
              title="What is the process of signing up with us?"
              description={`
                Want to signup? Sure, here's a simple step-by-step guide on how to sign up and get started:
                1. Open your preferred web browser and navigate to the website. 
                2. Look for the "Sign Up" or "Register" button and click on it to start the registration process.
                3. Fill in your personal information, including your name, email address, country and location.
                4. Choose a strong password and confirm it.
                5. Complete any additional verification steps required by the app, such as Id or passport verification.
                6. Provide your financial information, such as your various withdrawal wallet details, fund your account and start investing.
                7. Once your account is set up, you can start exploring the app's features, such as browsing available investments and plans, making investment etc.
                `}
            />
          </p>
          <p>
            <Faq
              title="What elements are evaluated when strategically allocating assets in portfolios?"
              description="When managing portfolios, we consider various asset classes such as stocks, bonds, real estate, and alternative investments. Each asset class is evaluated based on its risk-return profile, correlation with other assets, and its role in achieving diversification. We aim to construct portfolios that balance risk and return by allocating assets strategically according to your investment objectives and risk tolerance, our approach involves monitoring and adjusting the allocation of assets over time to adapt to changes in market conditions and economic outlooks."
            />
          </p>
          <p>
            <Faq
              title="Why should you trust us, and what makes us stand out from the rest?"
              description="At Elizabeth Jane Ross Wealth Management, we're dedicated to providing accessible and user-friendly investment solutions. With a team of experienced professionals, we aim to empower individuals to achieve their financial goals through innovative and transparent investment opportunities. Our platform offers a diverse range of assets and personalized services tailored to your needs, ensuring a seamless and rewarding investment experience."
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Faqs;
