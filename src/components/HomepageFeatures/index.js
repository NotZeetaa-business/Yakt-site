import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Performance Profiles',
    Svg: require('@site/static/img/undraw_profiles.svg').default,
    description: (
      <>
        Switch between Battery Saver, Balanced, Gaming, and Low-Latency modes to get the best out of your device for every use case.
      </>
    ),
  },
  {
    title: 'Device Insights',
    Svg: require('@site/static/img/undraw_monitor.svg').default,
    description: (
      <>
        Monitor Android version, GPU, RAM, Kernel, and Battery info—all in one clean interface. Stay informed about your hardware.
      </>
    ),
  },
  {
    title: 'Custom DNS & Automation',
    Svg: require('@site/static/img/undraw_automation.svg').default,
    description: (
      <>
        Change your DNS provider easily and apply startup scripts for full control and customization at boot.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
