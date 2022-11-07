import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Cozy design clone created by Ngabonziza nestor" />
        <link rel="icon" href="/assets/logo-1.svg" />
      </Head>
      <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      </div>
    </div>
  );
}
