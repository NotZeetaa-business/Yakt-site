// src/components/ReviewCard.jsx
import React from 'react';
import { Star } from 'lucide-react'; // Optional: install lucide-react or use emoji fallback

const ReviewCard = ({ name, device, date, stars = 5, children }) => {
  return (
    <div
      style={{
        border: '1px solid #e1e1e1',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        backgroundColor: 'var(--ifm-background-surface)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <strong>{device}</strong>
        <span>
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} size={16} fill="#facc15" color="#facc15" style={{ marginLeft: 2 }} />
          ))}
        </span>
      </div>
      <p style={{ fontStyle: 'italic' }}>{children}</p>
      <div style={{ textAlign: 'right', marginTop: '0.5rem', fontSize: '0.9rem' }}>
        — <em>{name}, {date}</em>
      </div>
    </div>
  );
};

export default ReviewCard;
