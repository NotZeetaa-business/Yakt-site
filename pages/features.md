---
id: features
title: Features
hide_sidebar: true  # Prevent Jekyll processing
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <ThemedImage
    alt="Yakt Banner"
    sources={{
      light: useBaseUrl('img/yakt_banner.jpg'),
      dark: useBaseUrl('img/yakt_banner.jpg'),
    }}
    style={{maxWidth: 'min(100%, 800px)', borderRadius: '8px'}}
  />
</div>

# 🔧 Features

Explore the powerful set of features designed to give you full control and insights into your device's performance.

## ⚡ Performance Profiles

- **Battery Profile** – Optimize your device for maximum battery life.
- **Balanced Profile** – A smart balance between performance and battery consumption.
- **Gaming Profile** – Boost performance for a smoother gaming experience.
- **Latency Profile** – Reduce system and touch latency for more responsive control.

## 🌐 Network Utilities

- **DNS Changer** – Easily switch DNS providers for better privacy, speed, or content filtering.

## 🧠 System Insights

- **Hardware Info** – View detailed specs and real-time status for:
  - Android version
  - GPU
  - RAM
  - Kernel
  - Battery

## 🛠️ Automation

- **Apply Script on Boot** – Automatically apply your custom scripts each time the device starts.

# 📊 Yakt Performance Benchmarks (Geekbench 6 - Poco F3)

<div style={{
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '1rem',
  flexWrap: 'wrap'
}}>
  <div style={{ textAlign: 'center', padding: '1rem' }}>
    <h3 style={{color: '#82ca9d', marginBottom: '0.5rem'}}>3.4×</h3>
    <p>Single-Core Improvement</p>
  </div>
  <div style={{ textAlign: 'center', padding: '1rem' }}>
    <h3 style={{color: '#82ca9d', marginBottom: '0.5rem'}}>2.8×</h3>
    <p>Multi-Core Improvement</p>
  </div>
  <div style={{ textAlign: 'center', padding: '1rem' }}>
    <h3 style={{color: '#82ca9d', marginBottom: '0.5rem'}}>241%</h3>
    <p>Average Gain</p>
  </div>
</div>

<div style={{
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
  gap: '2rem',
  flexWrap: 'wrap'
}}>
  <div style={{ textAlign: 'center' }}>
    <p><strong>Single-Core:</strong> 377 → <span style={{color: '#82ca9d'}}>1289 (+242%)</span></p>
  </div>
  <div style={{ textAlign: 'center' }}>
    <p><strong>Multi-Core:</strong> 1203 → <span style={{color: '#82ca9d'}}>3379 (+181%)</span></p>
  </div>
</div>

<div style={{marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#666'}}>
  <p>Tested on Poco F3 (Snapdragon 870) running Android 15<br/>Geekbench 6 benchmark results</p>
</div>

---
