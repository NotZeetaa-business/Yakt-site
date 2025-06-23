import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const SCREENSHOTS = [
  {
    src: "https://github.com/NotZeetaa/Yakt-APP/blob/main/screenshots/1.jpg?raw=true",
    alt: "Profiles selection",
    caption: "Profiles Selection"
  },
  {
    src: "https://github.com/NotZeetaa/Yakt-APP/blob/main/screenshots/2.jpg?raw=true",
    alt: "Extras Page",
    caption: "Extras Page"
  },
  {
    src: "https://github.com/NotZeetaa/Yakt-APP/blob/main/screenshots/3.jpg?raw=true",
    alt: "Informations Page",
    caption: "System Information"
  },
  {
    src: "https://github.com/NotZeetaa/Yakt-APP/blob/main/screenshots/4.jpg?raw=true",
    alt: "Dex Optimization selection",
    caption: "Dex Optimization"
  },
  {
    src: "https://github.com/NotZeetaa/Yakt-APP/blob/main/screenshots/5.jpg?raw=true",
    alt: "Main Page",
    caption: "Main Dashboard"
  },
  {
    src: "https://github.com/NotZeetaa/Yakt-APP/blob/main/screenshots/6.jpg?raw=true",
    alt: "DNS Selection",
    caption: "DNS Configuration"
  }
];

function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % SCREENSHOTS.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.carouselTrack}>
        {SCREENSHOTS.map((screenshot, index) => (
          <div 
            key={index} 
            className={clsx(styles.carouselSlide, {
              [styles.active]: index === currentIndex,
              [styles.prev]: index === (currentIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length,
              [styles.next]: index === (currentIndex + 1) % SCREENSHOTS.length
            })}
          >
            <div className={styles.carouselImageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className={styles.carouselImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.carouselCaption}>
                {screenshot.caption}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.carouselIndicators}>
        {SCREENSHOTS.map((_, index) => (
          <button
            key={index}
            className={clsx(styles.carouselIndicator, {
              [styles.active]: currentIndex === index
            })}
            onClick={() => goToSlide(index)}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
      
      <button 
        className={clsx(styles.carouselControl, styles.prev)}
        onClick={() => setCurrentIndex(prev => 
          (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length
        )}
        aria-label="Previous screenshot"
      >
        &lt;
      </button>
      
      <button 
        className={clsx(styles.carouselControl, styles.next)}
        onClick={() => setCurrentIndex(prev => 
          (prev + 1) % SCREENSHOTS.length
        )}
        aria-label="Next screenshot"
      >
        &gt;
      </button>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner, 'hero')}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={clsx('hero__title', styles.title)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.subtitle)}>
            {siteConfig.tagline}
          </p>
          
          <div className={styles.ctaContainer}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              to="/docs/features">
              🚀 Get Started
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.ctaButton)}
              to="/docs/download">
              ⬇️ Download Now
            </Link>
          </div>
          
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>1k+</div>
              <div className={styles.statLabel}>Downloads</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>241%</div>
              <div className={styles.statLabel}>Efficient Gain</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>4.8★</div>
              <div className={styles.statLabel}>Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className={styles.heroMedia}>
          <div className={styles.demoFrame}>
            <ScreenshotCarousel />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageDescription() {
  return (
    <section className={styles.descriptionSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center">
              <h2 className={styles.sectionTitle}>Transform Your Android Experience</h2>
              <p className={styles.sectionSubtitle}>
                Our all-in-one toolkit provides powerful optimization features, real-time monitoring, 
                and deep system insights to maximize your Android device's performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Ultimate Android Performance Toolkit`}
      description="All-in-one Android optimization toolkit for developers and power users. Boost performance, monitor resources, and optimize your device.">
      <HomepageHeader />
      <main>
        <HomepageDescription />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}