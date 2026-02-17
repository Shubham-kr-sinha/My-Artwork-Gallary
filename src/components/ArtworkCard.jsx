import React from 'react';
import { motion } from 'framer-motion';

const ArtworkCard = ({ src, title, index, onClick }) => {
  return (
    <motion.div
      className="artwork-card"
      layoutId={`card-${index}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, cursor: 'pointer', zIndex: 10 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        border: '1px solid var(--indigo)',
        padding: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <img
          src={src}
          alt={title || `Artwork ${index + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            filter: 'sepia(0.2) contrast(1.1)'
          }}
        />
      </div>
      {/* Decorative corners */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '4px solid var(--saffron)', borderLeft: '4px solid var(--saffron)' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '20px', borderTop: '4px solid var(--saffron)', borderRight: '4px solid var(--saffron)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '20px', height: '20px', borderBottom: '4px solid var(--saffron)', borderLeft: '4px solid var(--saffron)' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '4px solid var(--saffron)', borderRight: '4px solid var(--saffron)' }} />
    </motion.div>
  );
};

export default ArtworkCard;
