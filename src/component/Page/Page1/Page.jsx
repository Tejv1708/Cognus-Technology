import "./page.css";
import Anime from "./Anime.png";

const Page = () => {
  return (
    <>
      <div className="page-container">
        <div>
          <h1>Get Your Job In 3 Steps</h1>
        </div>
        <div className="step">
          <div className="box-yellow">
            <div className="transparent-box"></div>
          </div>
          <div>
            <h3>Create Profile</h3>
            <h5>
              It Takes 60 seconds to sign-up and create your free skills profile
            </h5>
          </div>
        </div>
        {/*  */}
        <div className="step">
          <div className="box-red">
            <div className="transparent-box"></div>
          </div>
          <div>
            <h3>Instant Result </h3>
            <h5>
              We match your profile directly to the available opportunities so
              you don't waste time
            </h5>
          </div>
        </div>
        {/*  */}
        <div className="step">
          <div className="box-blue">
            <div className="transparent-box"></div>
          </div>
          <div>
            <h3>Apply Directly </h3>
            <h5>
              After applying for the job, Your CV will be sent directly to the
              hiring manager.
            </h5>
          </div>
        </div>
      </div>
      <img className="anime" src={Anime} alt="" />
      <button className="page-button">Get Started</button>
    </>
  );
};

export default Page;
