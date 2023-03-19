import React from "react";

export type Props = {};

export const Education: React.FC<Props> = (props) => {
  return (
    <section>
      <h2>Education</h2>
      <h3>
        Swinburne University of Technology <small>(2019)</small>
      </h3>
      <ul>
        <li>
          Bachelor of Engineering (Honors) <small>Software</small>
        </li>
        <li>
          Bachelor of Computer Science <small>Software Development</small>
        </li>
      </ul>
    </section>
  );
};
