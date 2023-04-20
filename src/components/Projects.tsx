import React from "react";

import styles from "./Projects.module.css";

const DEFAULT_PROJECTS = [
  {
    heading: "Development of Technical Strategy for 2023-2025",
    description:
      "Worked closely with technical director to set out technical vision and strategy for the next 3 years",
    items: [
      "Detailed resourcing, technical debt and key focus areas for the duration of the plan",
      "Working with key stakeholders for implementation and delivery",
    ],
  },
  {
    heading: "Migration to Docker",
    description:
      "Instrumental in leading team from AWS Elastic Beanstalk to a containerized ECS infrastructure",
    items: [
      "No downtime during rollout",
      "2hr deploys reduced to 5 minutes",
      "Introduced team to Infrastructure as Code tooling using Pulumi",
    ],
  },
  {
    heading: "Property Page Modernization",
    description:
      "Setup and lead the replacement of a legacy UI with a brand new React Microfrontend",
    items: [
      "Architected to be extensible and compatible with a SPA in the future",
      "Allowed for opt in by customers for first 3 months after release",
    ],
  },
  {
    heading: "Branded React Component Styleguide",
    description:
      "Implemented initial styleguide components for re-use across the platform",
    items: [
      "Built as a standalone npm package using React Styleguidist",
      "Enabled developers to spend less time reinventing the wheel and more time shipping features",
    ],
  },
];

type Project = {
  heading: string;
  description: string;
  items: string[];
};

export interface Props {
  projects?: Project[];
}

export const Projects: React.FC<Props> = ({ projects }) => {
  if (!projects) return null;

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className={styles.project}>
          <h3>{p.heading}</h3>
          <p>{p.description}</p>
          <ul>
            {p.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

Projects.defaultProps = { projects: DEFAULT_PROJECTS };
