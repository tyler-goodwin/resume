import { classes } from "@/utils";
import React from "react";

import styles from "./Skills.module.css";

export const DEFAULT_SKILLS: Section[] = [
  {
    heading: "Languages",
    items: [
      "Typescript",
      "Javascript",
      "Ruby",
      "HTML & CSS",
      "Rust",
      "C++",
      "C#",
      "Kotlin",
      "Bash",
    ],
  },
  {
    heading: "Frameworks and Tools",
    items: ["React", "Ruby on Rails", "PostgreSQL", "Three.js"],
  },
  {
    heading: "DevOps",
    items: [
      "AWS",
      "Pulumi",
      "Docker",
      "Linux",
      "Cloudflare",
      "Bitbucket CI",
      "Jenkins",
    ],
  },
  {
    heading: "Professional",
    items: ["Technical Strategy", "Code Review", "Communication"],
  },
];

type Section = {
  heading: string;
  items: string[];
};

export type Props = {
  flex?: boolean;
  sections?: Section[];
};

export const Skills: React.FC<Props> = (props) => {
  const { sections, flex } = props;
  return (
    <section>
      <h2>Skills</h2>
      <div className={classes(styles.skills, flex && styles.skillsFlex)}>
        {(sections || []).map((s, i) => (
          <SectionDisplay key={i} section={s} />
        ))}
      </div>
    </section>
  );
};

Skills.defaultProps = {
  sections: DEFAULT_SKILLS,
  flex: true,
};

export const SectionDisplay: React.FC<{ section: Section }> = (props) => {
  const {
    section: { heading, items },
  } = props;
  return (
    <div>
      <h3>{heading}</h3>
      <ul className={styles.badges}>
        {items.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};
