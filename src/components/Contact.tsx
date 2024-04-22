/* eslint-disable @typescript-eslint/no-explicit-any */
import ResumePdf from "../assets/docs/Resume of Kritika Bandekar.pdf";

const Contact = () => {
  return (
    <div className="contact-div main-container">
      <div className="head-title">Contact Me</div>
      <div className="contact-values">
        <div className="contact">
          <i className="fa-solid fa-envelope"></i>
          <p>kritikabandekar24@gmail.com</p>
        </div>
        <a
          href={ResumePdf}
          download="Resume-Kritika-Bandekar"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact">
            <i className="fa-solid fa-download"></i>
            <p>Download Resume</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
