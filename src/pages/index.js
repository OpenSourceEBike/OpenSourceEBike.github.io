import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ProgressBar from "@site/src/components/ProgressBar";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <br></br>
        <div className={styles.buttons}>
		<Link
            className="button button--secondary button--lg"
            to="/docs/tsdz2/intro"
          >
            TSDZ2
          </Link>
          <Link
            style={{ marginLeft: 2 + "em" }}
            className="button button--secondary button--lg"
            to="/docs/bafang/intro"
          >
            Bafang
          </Link>
          <Link
            style={{ marginLeft: 2 + "em" }}
            className="button button--secondary button--lg"
            to="/docs/display/intro"
          >
            Display
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`OpenSource E-Bike`}
      description="OpenSource E-Bike Information and Firmwares<head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
