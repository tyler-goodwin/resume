import React from "react";

import styles from "./Info.module.css";

const GITHUB = "https://github.com/tyler-goodwin";
const LINKED_IN = "https://www.linkedin.com/in/tylerjgoodwin/";

export const Info: React.FC = () => {
  return (
    <section>
      <h1>
        Tyler Goodwin<small>Software Engineer | Technical Lead</small>
      </h1>
      <p>
        <a href={GITHUB}>Github</a> | <a href={LINKED_IN}>LinkedIn</a>
      </p>
      <p>Passionate professional problem solver.</p>
    </section>
  );
};
