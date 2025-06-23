---
id: download
title: Download Yakt
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx'; // Add this import at the top
import styles from './styles.module.css'; // Ensure this is imported

<div className="download-container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>

# Download Yakt <span className="rocket">🚀</span>

<div 
  className="animated-banner"
  style={{textAlign: 'center', marginBottom: '2rem'}}
>
  <ThemedImage
    alt="Yakt Banner"
    sources={{
      light: useBaseUrl('img/yakt_banner.jpg'),
      dark: useBaseUrl('img/yakt_banner.jpg'),
    }}
    style={{maxWidth: 'min(100%, 800px)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)'}}
  />
</div>

## 🔥 Latest Release - v1.7

<div className="release-card" style={{
  background: 'var(--ifm-card-background-color)',
  borderRadius: '12px',
  padding: '1.5rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  marginBottom: '2rem',
  border: '1px solid var(--ifm-color-emphasis-200)'
}}>
  <div className="alert alert--info" style={{
    backgroundColor: 'var(--ifm-color-info-contrast-background)',
    borderLeft: '4px solid var(--ifm-color-info)',
    padding: '1rem'
  }}>
    <h3 style={{marginTop: 0}}>What's New in v1.7</h3>
    <ul style={{marginBottom: 0}}>
      <li>🌍 Added Russian translation</li>
      <li>🌍 Expanded Portuguese translations</li>
      <li>📜 Updated YAKT scripts to v1.3</li>
      <li>🔄 Improved "Check for Updates" functionality</li>
      <li>📉 Reduced excessive log output</li>
      <li>🐛 General improvements and bug fixes</li>
    </ul>
  </div>
  
  <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem', flexWrap: 'wrap'}}>
    <div style={{flex: 1, minWidth: '200px', marginRight: '1rem'}}>
      <h3>Version History</h3>
      <ul className="version-history">
        <li>v1.6: Added battery health monitoring</li>
        <li>v1.5: Introduced gaming profile enhancements</li>
        <li>v1.4: Improved system stability</li>
      </ul>
    </div>
    
    <div style={{flex: 1, minWidth: '200px'}}>
      <h3>Requirements</h3>
      <ul>
        <li>Android 9.0+</li>
        <li>Rooted device</li>
        <li>Kernel with init.d support</li>
      </ul>
    </div>
  </div>
</div>

## 📦 Get Yakt Now

<div 
  className="download-button-container"
  style={{textAlign: 'center', marginTop: '1rem', marginBottom: '2rem'}}
>
  <a 
    href="https://play.google.com/store/apps/details?id=com.notzeetaa.yakt"
    target="_blank"
    rel="noopener noreferrer"
    className="download-button"
  >
    <div className="button-hover-effect">
      <ThemedImage
        alt="Get it on Google Play"
        sources={{
          light: useBaseUrl('img/google-play-badge.png'),
          dark: useBaseUrl('img/google-play-badge.png'),
        }}
        style={{
          height: '100px', 
          objectFit: 'contain',
          filter: 'drop-shadow(0 5px 15px rgba(0, 150, 136, 0.3))',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  </a>
  
  <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
    <a
      href="https://github.com/NotZeetaa/YAKT-APP"
      className={clsx('button button--lg', styles.githubButton)}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ marginRight: '8px' }}
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      Source Code
    </a>
  </div>
</div>

## 💎 Why Download Yakt?

<div className="features-grid" style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
  marginBottom: '3rem'
}}>
  <div 
    className="feature-card hover-effect"
    style={{
      background: 'var(--ifm-card-background-color)',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      border: '1px solid var(--ifm-color-emphasis-100)'
    }}
  >
    <h3>⚡ Performance Boost</h3>
    <p>Unlock your device's full potential with optimized performance profiles</p>
  </div>
  
  <div 
    className="feature-card hover-effect"
    style={{
      background: 'var(--ifm-card-background-color)',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      border: '1px solid var(--ifm-color-emphasis-100)'
    }}
  >
    <h3>🔋 Battery Optimization</h3>
    <p>Extend your battery life with intelligent power management</p>
  </div>
  
  <div 
    className="feature-card hover-effect"
    style={{
      background: 'var(--ifm-card-background-color)',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      border: '1px solid var(--ifm-color-emphasis-100)'
    }}
  >
    <h3>🎮 Gaming Experience</h3>
    <p>Enhance gaming performance with dedicated gaming profiles</p>
  </div>
</div>

## 📥 Alternative Download Options

<div className="download-options" style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  marginBottom: '2rem'
}}>
  <div
    className="download-option hover-effect"
    style={{
      background: 'var(--ifm-card-background-color)',
      borderRadius: '12px',
      padding: '1.5rem',
      textAlign: 'center',
      border: '2px dashed var(--ifm-color-primary)'
    }}
  >
    <h3>GitHub Release</h3>
    <p>Get the latest APK directly from our GitHub repository</p>
    <a
      href="https://github.com/NotZeetaa/YAKT-APP/releases"
      className="button button--primary button--block hover-effect"
    >
      Download APK
    </a>
  </div>
  
  <div
    className="download-option hover-effect"
    style={{
      background: 'var(--ifm-card-background-color)',
      borderRadius: '12px',
      padding: '1.5rem',
      textAlign: 'center',
      border: '2px dashed var(--ifm-color-info)'
    }}
  >
    <h3>Telegram Channel</h3>
    <p>Join our Telegram channel for instant updates and downloads</p>
    <a
      href="https://t.me/YAKTC"
      className="button button--info button--block hover-effect"
    >
      Join Telegram
    </a>
  </div>
</div>

</div>

<style>
{`
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.download-container {
  animation: fadeIn 0.8s ease-out;
}

.rocket {
  display: inline-block;
  animation: pulse 2s infinite;
}

.release-card {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.release-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.version-history li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.version-history li:before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--ifm-color-primary);
}

.download-button:hover img {
  filter: drop-shadow(0 8px 20px rgba(0, 150, 136, 0.4));
  transform: scale(1.05);
}

.button-hover-effect {
  display: inline-block;
  transition: all 0.3s ease;
}

.button-hover-effect:hover {
  transform: scale(1.05);
}

.button-hover-effect:active {
  transform: scale(0.95);
}

.hover-effect {
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.feature-card {
  transition: all 0.3s ease;
}

.download-option {
  transition: all 0.3s ease;
}

.download-option:hover {
  transform: scale(1.03);
}
`}
</style>