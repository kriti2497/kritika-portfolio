import { IProject } from "./ProjectListing";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import React from "react";
import SecondaryButton from "./SecondaryButton";

const ProjectDetail: React.FC<{ project: IProject }> = ({ project }) => {
  // const [seeMore, setSeeMore] = useState(false);
  const { title, image, projectDesc, techStack, githubUrl, appUrl } = project;
  return (
    <div className="project">
      <div className="project-img">
        <Link to={appUrl} target="_blank">
          <img src={image} alt="project" />
        </Link>
      </div>
      <div className="project-details">
        <p className="proj-title">{title}</p>
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
