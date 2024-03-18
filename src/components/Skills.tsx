import Skill1 from "../assets/images/skills/angular.svg";
import Skill10 from "../assets/images/skills/scss.svg";
import Skill11 from "../assets/images/skills/tailwind.svg";
import Skill12 from "../assets/images/skills/ts.svg";
import Skill13 from "../assets/images/skills/css.svg";
import Skill14 from "../assets/images/skills/next.svg";
import Skill2 from "../assets/images/skills/bootstrap.svg";
import Skill3 from "../assets/images/skills/firebase.svg";
import Skill4 from "../assets/images/skills/github.svg";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Skill5 from "../assets/images/skills/html.svg";
import Skill6 from "../assets/images/skills/javascript.svg";
import Skill7 from "../assets/images/skills/material-ui.svg";
import Skill8 from "../assets/images/skills/postman.svg";
import Skill9 from "../assets/images/skills/react.svg";

const Skills = () => {
  const imgList = [
    {
      img: Skill5,
      title: "HTML 5",
      id: 1,
    },
    {
      img: Skill13,
      title: "CSS",
      id: 2,
    },
    {
      img: Skill6,
      title: "Javascript + ES6",
      id: 3,
    },
    {
      img: Skill12,
      title: "Typescript",
      id: 4,
    },
    {
      img: Skill9,
      title: "React JS",
      id: 5,
    },
    {
      img: Skill1,
      title: "Angular 2+",
      id: 6,
    },
    {
      img: Skill14,
      title: "Next JS",
      id: 7,
    },
    {
      img: Skill10,
      title: "SCSS",
      id: 8,
    },
    {
      img: Skill11,
      title: "Tailwind",
      id: 9,
    },
    {
      img: Skill2,
      title: "Bootstrap",
      id: 10,
    },
    {
      img: Skill3,
      title: "Firebase",
      id: 11,
    },
    {
      img: Skill7,
      title: "Material UI",
      id: 12,
    },
    {
      img: Skill4,
      title: "Github",
      id: 13,
    },
    {
      img: Skill8,
      title: "Postman",
      id: 14,
    },
  ];
  return (
    <div className="skills-div">
      <div className="head-title">My Skills</div>
      <div className="skill-list">
        {imgList.map((eachImg: any) => (
          <div key={eachImg.id}>
            <img src={eachImg.img} alt="skill" />
            <p className="skill-title">{eachImg.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
