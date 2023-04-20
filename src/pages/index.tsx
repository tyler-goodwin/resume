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
          content="Resume of Software Engineer and Technical Lead Tyler Goodwin."
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
        <Referees />
      </main>
    </>
  );
}
