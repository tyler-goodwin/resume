import React from "react";

import styles from "./skills.module.css";

export const DEFAULT_SKILLS: Section[] = [
  {
    heading: "Languages",
    items: ["Typescript", "Javascript", "Ruby", "Rust", "C++", "Kotlin"],
  },
  {
    heading: "Frameworks",
    items: ["React", "Ruby on Rails"],
  },
];

type Section = {
  heading: string;
  items: string[];
};

export type Props = {
  sections?: Section[];
};

export const Skills: React.FC<Props> = (props) => {
  const { sections } = props;
  return (
    <section>
      <h2>Skills</h2>
      {(sections || []).map((s, i) => (
        <SectionDisplay key={i} section={s} />
      ))}
    </section>
  );
};

Skills.defaultProps = {
  sections: DEFAULT_SKILLS,
};

export const SectionDisplay: React.FC<{ section: Section }> = (props) => {
  const {
    section: { heading, items },
  } = props;
  return (
    <section>
      <h3>{heading}</h3>
      <ul className={styles.badges}>
        {items.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
};
