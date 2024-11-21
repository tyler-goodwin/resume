import Head from "next/head";
import {
  Education,
  Info,
  Projects,
  Referees,
  Skills,
  WorkHistory,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume | Tyler Goodwin</title>
        <meta
          name="description"
          content="Resume of Senior Software Engineer Tyler Goodwin."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Info />
        <Skills sections={[
          {
            heading: "Languages",
            items: [
              "Typescript",
              "Javascript",
              "Java",
              "HTML & CSS",
              "Bash",
            ]
          },
          {
            heading: "Frameworks & Tools",
            items: [
              "NodeJS", "React", "Webpack", "Rollup", "Bazel",
            ]
          },
          {
            heading: "Platforms & DevOps",
            items: [
              "Cloudflare",
              "Terraform",
              "Docker",
              "AWS",
              "Linux",
            ],
          },
          {
            heading: "Professional",
            items: [
              "Technical Strategy",
              "Code Review",
              "Communication",
            ]
          }
        ]} />
        <Education />
        <WorkHistory />
        <Projects />
        <Referees />
      </main>
    </>
  );
}
