import React from "react";
import styles from "./WorkHistory.module.css";

type Role = {
  title: string;
  employer: string;
  start: string;
  end: string;
  description: string;
  responsibilities: string[];
};

export interface Props {
  roles: Role[];
}

export const WorkHistory: React.FC<Props> = (props) => {
  const roles = props.roles || ROLES;
  return (
    <section>
      <h2>Work History</h2>
      <div>
        {roles.map((role, i) => (
          <div key={i} className={styles.role}>
            <div className={styles.header}>
              <h3>
                {role.title}
                <small>{role.employer}</small>
              </h3>
              <div className={styles.date}>
                {role.start} - {role.end}
              </div>
            </div>
            <p>{role.description}</p>
            <ul>
              {role.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const ROLES: Role[] = [
  {
    title: "Technical Lead",
    employer: "Phoria",
    start: "August 2022",
    end: "Present",
    description: "Lead the development team for the CAPTUR3D platform",
    responsibilities: [
      "Managing delivery of technical goals for the platform",
      "Tracking DORA metrics and OKRs for the team",
      "Supporting team development and blaah",
    ],
  },
  {
    title: "Senior Software Engineer",
    employer: "Phoria",
    start: "August 2020",
    end: "August 2022",
    description:
      "Full stack developer working with Ruby on Rails, Typescript and React. ",
    responsibilities: [
      "Leading feature delivery",
      "Devops and IaC using AWS, Pulumi and Cloudflare",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Bosch Australia",
    start: "July 2019",
    end: "August 2020",
    description:
      "Full-stack development for embedded linux devices and cloud applications for enabling connectivity in automated driving",
    responsibilities: [
      "Full-stack TDD with Ruby, Javascript and Kotlin",
      "Linux application development with C++",
    ],
  },
  {
    title: "Engineering Technologist",
    employer: "Bosch Australia",
    start: "March 2019",
    end: "July 2019",
    description:
      "Full-stack development for embedded linux devices and cloud applications for enabling connectivity in automated driving",
    responsibilities: [
      "Full-stack TDD with Ruby, Javascript and Kotlin",
      "Linux application development with C++",
    ],
  },
  {
    title: "Engineering Student",
    employer: "Bosch Australia",
    start: "July 2017",
    end: "March 2019",
    description:
      "Full-stack development for embedded linux devices and cloud applications for enabling connectivity in automated driving",
    responsibilities: [
      "Full-stack TDD with Ruby, Javascript and Kotlin",
      "Linux application development with C++",
    ],
  },
];
