import Head from "next/head";
import { Education, Info, Projects, Skills, WorkHistory } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume | Tyler Goodwin</title>
        <meta
          name="description"
          content="This is the resume of software engineer Tyler Goodwin."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Info />
        <Skills />
        <Projects />
        <Education />
        <WorkHistory />
      </main>
    </>
  );
}
