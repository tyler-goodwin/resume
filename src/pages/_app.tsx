import "@/styles/globals.css";
import { classes } from "@/utils";
import type { AppProps } from "next/app";
import { Fira_Code } from "next/font/google";

import styles from "@/styles/Home.module.css";

const font = Fira_Code({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classes(styles.main, font.className)}>
      <Component {...pageProps} />
    </main>
  );
}
