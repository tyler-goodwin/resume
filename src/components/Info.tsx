import React from "react";

import styles from "./Info.module.css";

const GITHUB = "https://github.com/tyler-goodwin";
const LINKED_IN = "https://www.linkedin.com/in/tylerjgoodwin/";

export const Info: React.FC = () => {
  return (
    <section>
      <h1>Tyler Goodwin</h1>
      <p>Software Engineer | Tech Lead</p>
      <p>
        <a href={GITHUB}>Github</a> | <a href={LINKED_IN}>LinkedIn</a>
      </p>
    </section>
  );
};
