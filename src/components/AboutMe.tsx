import PrimaryButton from "./PrimaryButton";
import ResumePdf from "../assets/docs/Resume of Kritika Bandekar.pdf";
// import SecondaryButton from "./SecondaryButton";

const AboutMe = () => {
  return (
    <div className="about-section main-container">
      <div className="head-title">About Me</div>
      <div className="inner-about">
        <div className="about-me">
          Hey there! 👋 I'm a frontend developer with 4+ years of experience
          crafting awesome web apps. I love building robust applications with
          responsive components using ReactJS and Angular. Besides coding, I
          also like drawing and sketching. 👩🏻‍🎨
        </div>
        <div className="resume-actions">
          <a
            href={ResumePdf}
            download="Resume-Kritika-Bandekar"
            target="_blank"
            rel="noreferrer"
          >
            <PrimaryButton title="Download Resume" />
          </a>
          {/* <a href={"/"}>
            <SecondaryButton title="View Resume" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
