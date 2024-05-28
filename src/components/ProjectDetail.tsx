import { IProject } from "./ProjectListing";
import InProgressIcon from "../assets/docs/in-progress-icon.png";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import React from "react";
import SecondaryButton from "./SecondaryButton";

const ProjectDetail: React.FC<{ project: IProject }> = ({ project }) => {
  // const [seeMore, setSeeMore] = useState(false);
  const { title, image, projectDesc, techStack, githubUrl, appUrl, status } =
    project;
  return (
    <div className="project">
      <div className="project-img">
        <Link to={appUrl} target="_blank" className="img-container">
          <img className="project-img-detail" src={image} alt="project" />
          {status === "in-progress" && (
            <span
              className="in-progress-tag"
              title="Stay Calm, Work in Progress 👩🏻‍💻"
            >
              <img src={InProgressIcon} alt="in-progress" />
            </span>
          )}
        </Link>
      </div>
      <div className="project-details">
        <p className="proj-title">{title}</p>
        {status === "in-progress" && (
          <p className="proj-in-progress">Work In Progress 👩🏻‍💻</p>
        )}
        <p>
          {projectDesc}
          {/* {projectDesc.slice(0, seeMore ? projectDesc.length : 100)}{" "}
          <span className="see-more-less" onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "See more.." : "See less.."}
          </span>{" "} */}
        </p>
        <div className="tech">
          {techStack.map((tech: string) => (
            <span className="tech-stack" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="app-actions">
          <Link to={appUrl} target="_blank">
            <PrimaryButton title="View Website" />
          </Link>
          <Link to={githubUrl} target="_blank">
            <SecondaryButton title="Github" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
