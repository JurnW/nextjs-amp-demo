import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>AMP Demo</h1>

        <p className={styles.description}>
          I&apos;m a regular HTML page, no AMP.
        </p>

        <div className={styles.grid}>
          <Link href="/amp">
            <a className={styles.card}>
              <h2>AMP Page &rarr;</h2>
              <p>This is a true AMP page.</p>
            </a>
          </Link>

          <Link href="/hybrid">
            <a className={styles.card}>
              <h2>Hybrid AMP Page &rarr;</h2>
              <p>This is a hybrid AMP page.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
