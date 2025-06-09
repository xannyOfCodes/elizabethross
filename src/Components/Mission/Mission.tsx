import "./Mission.css";
import missionImg from "../../assets/image.webp";

const Mission = () => {
  return (
    <>
      <div className="mission">
        <div className="mission_img">
          <img src={missionImg} alt="" />
        </div>
        <div className="mission_description">
          <h1>MY MISSION STATEMENT</h1>
          <p>
            Expertise, knowledge, and personalized support to help you achieve
            your aspirations and reach your full potential.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
