import PrimaryButton from "./PrimaryButton";
import ResumePdf from "../assets/docs/Resume of Kritika Bandekar.pdf";
import SecondaryButton from "./SecondaryButton";

const AboutMe = () => {
  return (
    <div className="about-section">
      <div className="head-title">About Me</div>
      <div className="inner-about">
        <div className="about-me">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages
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
          <a href={"/"}>
            <SecondaryButton title="View Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
