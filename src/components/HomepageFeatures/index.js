import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Opensource",
    Svg: require("@site/static/img/easy-to-use-icon.svg").default,
    description: (
      <>
        All our documentation is opensource and one day all firmwares will be too
      </>
    )
  },
  {
    title: "Indepth",
    Svg: require("@site/static/img/file-settings-icon.svg").default,
    description: (
      <>
        We go byond where others have stopped, with diagrams, reverse enginering and actual OpenSource firmwares
      </>
    )
  },
  {
    title: "Independent",
    Svg: require("@site/static/img/shield-heart-icon.svg").default,
    description: (
      <>
        We're truely independent and will not hold back information just because some company doesn't want us to.
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
