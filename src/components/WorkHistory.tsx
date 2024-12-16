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
  roles?: Role[];
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
    title: "Senior Backend Engineer",
    employer: "Canva (Edge Team)",
    start: "October 2023",
    end: "Present",
    description: "Develop and operate edge capabilities as a part of Canva's product platform to ensure performant, secure and scalable traffic management for over 200 million monthly active users.",
    responsibilities: [
      "Technical leadership for ensuring delivery of key team projects such as a configurable router",
      "Key driver of teams strategic direction to align with wider organizational goals",
      "Enhancing team capabilities through mentoring and regular pair programming",
      "Support ongoing management of operational load through strategic initiatives and participating in on-call roster",
    ]
  },
  {
    title: "Technical Lead",
    employer: "Phoria",
    start: "August 2022",
    end: "October 2023",
    description:
      "Lead of development team for the CAPTUR3D platform. Managing and ensuring delivery of technical goals for the platform, including paying down technical debt and ensuring sustainable development practises.",
    responsibilities: [
      "Setting and ensuring delivery of technical strategy to meet business goals",
      "Overseeing management of feature delivery and platform maintenance",
      "Ensuring strong development team performance via DORA metrics and OKRs",
      "Supporting team professional development",
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
      "Incidence response and mitigations",
      "Developer tooling improvements to support effecient development practices",
      "Devops and IaC using AWS, Pulumi and Cloudflare",
      "Mentoring mid and junior developers",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Bosch Australia",
    start: "July 2019",
    end: "August 2020",
    description:
      "Full stack development for embedded linux devices and cloud applications for enabling connectivity in automated driving",
    responsibilities: [
      "Full-stack TDD with Ruby, Javascript and Kotlin",
      "Linux application development with C++",
      "Rapid POC developments",
    ],
  },
  {
    title: "Engineering Technologist",
    employer: "Bosch Australia",
    start: "March 2019",
    end: "July 2019",
    description:
      "Full stack development for embedded linux devices and cloud applications for enabling connectivity in automated driving",
    responsibilities: [
      "Full-stack TDD with Ruby, Javascript and Kotlin",
      "Linux application development with C++",
      "Rapid POC developments",
    ],
  },
  {
    title: "Engineering Student",
    employer: "Bosch Australia",
    start: "July 2017",
    end: "March 2019",
    description: "Automated testing and quality assurance of IoT projects",
    responsibilities: [
      "Automating testing of hardware and software products using javascript and C#",
      "Debugging issues in embedded linux devices",
    ],
  },
];
