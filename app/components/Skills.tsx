"use client";

import { ReactElement } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import styles from "./Skills.module.css";

// ✅ Fixed: use ReactElement instead of JSX.Element
type SkillLevel = {
  level: string;
  skills: { name: string; icon: ReactElement }[];
  color: string; // keep Tailwind color or convert to CSS
};

const skillLevels: SkillLevel[] = [
  {
    level: "Advanced",
    color: "#28ffdb",
    skills: [ 
        { name: "CSS", icon: <SiCss /> },
      { name: "HTML", icon: <SiHtml5 /> },   
      { name: "SEO", icon: <FaSearch /> },
    ],
  },
  {
    level: "Intermediate",
    color: "#9efded",
    skills: [     
      { name: "Bootstrap", icon: <SiBootstrap /> },
       { name: "JavaScript", icon: <SiJavascript /> },
          { name: "MySQL", icon: <SiMysql /> },
      { name: "PHP", icon: <SiPhp /> },   
    ],
  },
  {
    level: "Developing",
    color: "#d4f8f2",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionHeading}>TECHNOLOGIES</h2>

      <div className={styles.levelContainer}>
        {skillLevels.map((level, idx) => (
          <div key={idx} className={styles.levelBox}>
            {/* Level Heading */}
            <h3 className={styles.levelHeading} style={{ color: level.color }}>
              {level.level}
            </h3>

            {/* Skills Icons */}
            <div className={styles.skillsIcons}>
              {level.skills.map((skill, sidx) => (
                <div key={sidx} className={styles.skill}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}