/* eslint-disable @typescript-eslint/no-explicit-any */
import Project1 from "../assets/docs/project-thumbnails/country-finder.png";
import Project2 from "../assets/docs/project-thumbnails/chat-app.png";
import Project3 from "../assets/docs/project-thumbnails/easy-bank.png";
import Project4 from "../assets/docs/project-thumbnails/music-cafe.png";
import Project5 from "../assets/docs/project-thumbnails/age-calculator.png";
import ProjectDetail from "./ProjectDetail";
export interface IProject {
  title: string;
  image: any;
  projectDesc: string;
  techStack: string[];
  githubUrl: string;
  appUrl: string;
}
const ProjectListing = () => {
  const projectDetails: IProject[] = [
    {
      title: "Country Finder",
      image: Project1,
      projectDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      techStack: ["HTML", "SCSS", "React JS"],
      githubUrl: "https://github.com/kriti2497/country-finder",
      appUrl: "https://country-finder-ruby.vercel.app/",
    },
    {
      title: "Chat App using Firebase",
      image: Project2,
      projectDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      techStack: ["Next JS", "React MUI", "Firebase"],
      githubUrl: "https://github.com/kriti2497/mock-chat-app",
      appUrl: "https://mock-chat-app.vercel.app/",
    },
    {
      title: "Easy Bank static website",
      image: Project3,
      projectDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      techStack: ["HTML", "SCSS", "React JS"],
      githubUrl: "https://github.com/kriti2497/easy-bank",
      appUrl: "https://easy-bank-hazel-eight.vercel.app/",
    },
    {
      title: "Music Cafe",
      image: Project4,
      projectDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      techStack: ["HTML", "Tailwind", "React JS"],
      githubUrl: "https://github.com/kriti2497/music-cafe",
      appUrl: "https://music-cafe-sable.vercel.app/",
    },
    {
      title: "Age Calculator",
      image: Project5,
      projectDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      techStack: ["HTML", "Tailwind", "Next JS"],
      githubUrl: "https://github.com/kriti2497/age-calculator",
      appUrl: "https://age-calculator-ecru-six.vercel.app/",
    },
  ];
  return (
    <div className="projects-section">
      <div className="head-title mt-0">My Projects</div>
      {projectDetails.map((project: IProject) => (
        <ProjectDetail key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectListing;
