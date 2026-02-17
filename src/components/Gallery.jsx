import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtworkCard from './ArtworkCard';

const artworks = [
    { src: '/artworks/art4.jpg', title: 'Black Panther' },
    { src: '/artworks/art3.jpg', title: 'Mahadev' },
    { src: '/artworks/art8.jpg', title: 'Lord Hanuman' },
    { src: '/artworks/art1.jpg', title: 'Captain Jack Sparrow' },
    { src: '/artworks/art2.jpg', title: 'Harry Potter' },
    { src: '/artworks/art6.jpg', title: 'Gal Gadot' },
    { src: '/artworks/art5.jpg', title: 'Spider Man' },
    { src: '/artworks/art7.jpg', title: 'Madhubani Painting' },
    { src: '/artworks/art9.jpg', title: 'Iron Man' }
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);
    const scrollRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const animationFrameId = useRef(null);

    // Duplicate artworks to ensure smooth infinite loop
    const displayArtworks = [...artworks, ...artworks, ...artworks, ...artworks];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollSpeed = 1; // Pixels per frame

        const animate = () => {
            if (!isHovering) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Dynamic width calculation for responsive infinite loop
                // We have 4 sets of artworks
                const singleSetWidth = scrollContainer.scrollWidth / 4;

                if (singleSetWidth > 0 && scrollContainer.scrollLeft >= singleSetWidth) {
                    scrollContainer.scrollLeft -= singleSetWidth;
                }
            }
            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, [isHovering]);

    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-cream)' }}>
            <div style={{ textAlign: 'center' }}>
                <h2 className="gallery-title">My Journey</h2>
                <p className="gallery-subtitle">Hover to pause • Swipe to scroll • Click to zoom</p>
            </div>

            <div
                ref={scrollRef}
                className="hide-scrollbar"
                style={{
                    overflowX: 'auto',
                    display: 'flex',
                    cursor: 'grab',
                    scrollBehavior: 'auto',
                    whiteSpace: 'nowrap',
                    paddingBottom: '2rem'
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchStart={() => setIsHovering(true)}
                onTouchEnd={() => setIsHovering(false)}
            >
                <div className="gallery-track">
                    {displayArtworks.map((art, i) => (
                        <ArtworkCard
                            key={i}
                            index={i}
                            src={art.src}
                            title={art.title}
                            onClick={() => setSelectedId(art)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="modal-overlay"
                    >
                        <motion.div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="modal-close-btn"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedId.src}
                                alt={selectedId.title}
                                className="modal-image"
                            />
                            <h3 style={{ textAlign: 'center', marginTop: '1rem', fontFamily: 'Eczar', color: 'var(--text-dark)' }}>{selectedId.title}</h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
