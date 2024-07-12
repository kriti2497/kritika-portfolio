import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="details-div main-container">
      <div className="detail-section">
        <p className="detail-title">Where am I from?</p>
        <p className="detail-value">Goa, India</p>
      </div>
      <div className="detail-section">
        <p className="detail-title">Experience</p>
        <p className="detail-value">4 Years 11 Months</p>
      </div>
      <div className="detail-section">
        <p className="detail-title">My Socials</p>
        <p className="detail-value socials">
          <Link className="social-link" to={"https://github.com/kriti2497"}>
            <i className="fa-brands fa-square-github"></i>
          </Link>
          <Link
            className="social-link"
            to={"https://www.linkedin.com/in/kritika-bandekar-4420b116a"}
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            className="social-link"
            to={"https://www.instagram.com/kritikabandekar"}
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Details;
