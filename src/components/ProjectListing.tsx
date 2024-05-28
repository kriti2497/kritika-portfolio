/* eslint-disable @typescript-eslint/no-explicit-any */
import Project1 from "../assets/docs/project-thumbnails/country-finder.png";
import Project2 from "../assets/docs/project-thumbnails/chat-app.png";
import Project3 from "../assets/docs/project-thumbnails/easy-bank.png";
import Project4 from "../assets/docs/project-thumbnails/music-cafe.png";
import Project5 from "../assets/docs/project-thumbnails/age-calculator.png";
import Project6 from "../assets/docs/project-thumbnails/url-shortener.png";
import Project7 from "../assets/docs/project-thumbnails/kanban-board-basic.png";
import ProjectDetail from "./ProjectDetail";

export interface IProject {
  title: string;
  image: any;
  projectDesc: string;
  techStack: string[];
  githubUrl: string;
  appUrl: string;
  status: "todo" | "done" | "in-progress";
}
const ProjectListing = () => {
  const projectDetails: IProject[] = [
    {
      title: "Country Finder",
      image: Project1,
      projectDesc:
        "This app is all about exploring countries effortlessly. Browse through the listing page to discover details about each country. Click on any country card for a deep dive into its specifics. If you're looking for a specific country or capital—you can easily search for it. Plus, if you're interested in a particular region, just filter it out. You can also toggle between light and dark themes for whatever mood strikes you. Also, whether you're on your desktop or mobile, this app's got you covered because it is fully responsive. Check it out and start your global exploration today!",
      techStack: ["SCSS", "React JS"],
      githubUrl: "https://github.com/kriti2497/country-finder",
      appUrl: "https://country-finder-ruby.vercel.app/",
      status: "done",
    },
    {
      title: "Chat App using Firebase",
      image: Project2,
      projectDesc:
        "Introducing a streamlined chat application powered by Firebase. It's a breeze to get started—simply register and login to begin connecting with others. Whether it's a one-on-one conversation or a group chat with friends, you have the flexibility to initiate discussions effortlessly. The platform offers a seamless user experience, allowing you to engage in meaningful conversations with ease. Utilizing Firebase ensures reliability and real-time updates, enhancing the overall chatting experience.",
      techStack: ["Next JS", "React MUI", "Firebase"],
      githubUrl: "https://github.com/kriti2497/mock-chat-app",
      appUrl: "https://mock-chat-app.vercel.app/",
      status: "done",
    },
    {
      title: "URL Shortener",
      image: Project6,
      projectDesc:
        "A URL shortening project from Frontend Mentor, where I dedicated my efforts to crafting the backend API with Express.js. This application not only facilitates the conversion of long URLs into shortened ones but also includes a convenient copy URL functionality. This feature enhances user experience by providing seamless access to shortened links with just a click.",
      techStack: ["Tailwind", "Next JS", "Express JS"],
      githubUrl: "https://github.com/kriti2497/url-shortener",
      appUrl: "https://url-shortener-blush-delta.vercel.app/",
      status: "done",
    },
    {
      title: "Easy Bank landing page",
      image: Project3,
      projectDesc:
        "The Easy Bank landing page is a visually striking and user-friendly static webpage crafted with SCSS. Its sleek design seamlessly adapts to different screen sizes, ensuring an optimal viewing experience across devices.",
      techStack: ["SCSS", "React JS"],
      githubUrl: "https://github.com/kriti2497/easy-bank",
      appUrl: "https://easy-bank-hazel-eight.vercel.app/",
      status: "done",
    },
    {
      title: "Music Cafe",
      image: Project4,
      projectDesc:
        "Introducing Music Cafe, your go-to spot for music discovery and enjoyment. Think of it as your very own Spotify clone, offering a seamless experience for exploring artists and their music. With Music Cafe, you can dive deep into the world of music by searching for your favorite artists and accessing their entire song catalog. But that's not all—Music Cafe lets you preview songs with ease, allowing you to play snippets to get a taste of each track. Whether you're in the mood for a quick listen or ready to groove, you have the power to play, pause, and control your music experience.",
      techStack: ["Tailwind", "React JS"],
      githubUrl: "https://github.com/kriti2497/music-cafe",
      appUrl: "https://music-cafe-sable.vercel.app/",
      status: "done",
    },
    {
      title: "Age Calculator",
      image: Project5,
      projectDesc:
        "Introducing our Age Calculator app—a handy tool that precisely calculates your age in years, months, and days. With a sleek and intuitive interface, simply input your birthdate, and let the app do the rest. It instantly generates accurate results, breaking down your age into easily digestible units, giving you a comprehensive understanding of your time on this planet.",
      techStack: ["Tailwind", "Next JS"],
      githubUrl: "https://github.com/kriti2497/age-calculator",
      appUrl: "https://age-calculator-ecru-six.vercel.app/",
      status: "done",
    },
    {
      title: "Basic Kanban Board",
      image: Project7,
      projectDesc:
        "The Basic Kanban Board (Work in Progress) is a simple yet effective project management tool for organizing tasks. Users can create tasks, move them between stages (To-Do, In Progress, Completed), and delete them as needed. It enhances productivity by providing a clear visual of task progress. Ideal for individuals and small teams, this board helps streamline workflow and maintain focus on priorities. ",
      techStack: ["Tailwind", "React JS"],
      githubUrl: "https://github.com/kriti2497/kanban-board",
      appUrl: "https://kanban-board-tau-three.vercel.app/",
      status: "in-progress",
    },
  ];
  return (
    <div className="projects-section main-container">
      <div className="head-title mt-0">My Projects</div>
      {projectDetails.map((project: IProject) => (
        <ProjectDetail key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectListing;
