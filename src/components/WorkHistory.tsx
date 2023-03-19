import React from "react";

type Role = {
  title: string;
  employer: string;
  start: string;
  end: string;
  description: string;
  responsibilities: string[];
};

const ROLES: Role[] = [
  {
    title: "Technical Lead",
    employer: "Phoria",
    start: "August 2022",
    end: "Present",
    description: "DO THIS LATER",
    responsibilities: ["Building cool shit"],
  },
  {
    title: "Senior Software Engineer",
    employer: "Phoria",
    start: "August 2020",
    end: "August 2022",
    description: "Doing them senior software engineering things",
    responsibilities: ["Building slightly less cool shit"],
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
];

export interface Props {}

export const WorkHistory: React.FC<Props> = (props) => {
  return (
    <section>
      <h2>Work History</h2>
      <div>
        {ROLES.map((role, i) => (
          <div key={i}>
            <h3>{role.title}</h3>
            <div>{role.employer}</div>
            <div>
              {role.start} - {role.end}
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
