import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services_btns">
          <button id="my_story_and_services_btn">
            <p>My Story and services</p>
          </button>
          <button id="client_services_team_btn">
            <p>Client Services Team</p>
          </button>
          <button id="location_btn">
            <p>Location</p>
          </button>
        </div>

        <div className="services_contents">
          <div className="services_content_01">
            <div>
              <div>
                <h1>My Story and Services</h1>
                <video src="" controls></video>
                <p>
                  My goal is to thoroughly understand your financial needs and
                  then align the resources to help you meet or exceed them. I
                  can help you evaluate near-term concerns and plan for
                  long-term goals, be a sounding board for investment ideas,
                  assist you in developing and executing a strategy that is
                  precisely your own and helps you meet your needs.
                </p>
                <p id="aboutMeReadMoreTxt">
                  Elizabeth Jane Ross:"As a seasoned business professional with
                  expertise in business development, performance management, and
                  book management, I leverage my skills to drive growth and
                  retention at E*TRADE from Morgan Stanley. With a strong
                  educational background and recent certifications (SIE, Series
                  7, and Series 63), I am passionate about my work and eager to
                  connect with other managers and collaborators to explore new
                  opportunities."
                </p>
                <button id="readMoreBtn"></button>
              </div>

              <div>
                <ul>
                  <h1>Services include</h1>
                  <li>Wealth Management</li>
                  <li>Retirement Planning</li>
                  <li>Business Planning</li>
                  <li>401(k) Rollovers</li>
                  <li>Trust Services</li>
                  <li>Sustainable Investing</li>
                  <li>529 Plans</li>
                  <li>Corporate Retirement Plans</li>
                </ul>
              </div>
            </div>

            <div>
              <p>
                Securities Agent: DC, WI, WA, VT, VA, UT, TX, TN, SC, RI, OH,
                NY, NJ, NC, MI, MD, MA, LA, KY, KS, GA, FL, CO, CA, AZ, OR;
                General Securities Representative; Investment Advisor
                Representative NMLS#: 841426.
              </p>

              <p>
                Check the background of Our Firm and Investment Professionals on
                <a href="">FINRA's BrokerCheck</a>*
              </p>
            </div>
          </div>

          <div className="services_content_02">
            <div>My Story and Services</div>
            <div>Vince Pravata - Registered Client Service Associate</div>
            <div>
              <p>
                <span>Phone:</span> +1(432)246-4294
              </p>
              <p>
                <span>Email:</span> advisor.elizabethjaneross@gmail.com
              </p>
            </div>
          </div>
          <div className="services_content_03">
            <div>
              <h1>LOCATION</h1>
              <p>
                Harborside 2 200 Hudson Street, Suite 501, Jersey City, NJ 07311
                <span>Direct: +1(432)246-4294</span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
