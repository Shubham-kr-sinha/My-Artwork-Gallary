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
    { src: '/artworks/art7.jpg', title: 'Madhubani Painting'}
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

                // Reset scroll position to create infinite loop effect
                // If we have scrolled past the first set of items (approx 1/4 of total content width)
                // We reset to the start.
                // Total width relies on content. Let's assume average width per item roughly.
                // A better way is checking scrollWidth vs scrollLeft.

                // One set width approx: 8 items * (300px + 4rem gap) ~= 8 * 364 = 2912
                const singleSetWidth = artworks.length * 364;

                if (scrollContainer.scrollLeft >= singleSetWidth) {
                    scrollContainer.scrollLeft = 0; // or -= singleSetWidth for smoothness if slightly over
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
        <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0', background: 'var(--bg-cream)' }}>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--saffron)' }}>My Journey</h2>
                <p style={{ color: 'var(--indigo)' }}>Hover to pause • Swipe to scroll • Click to zoom</p>
            </div>

            <div
                ref={scrollRef}
                className="hide-scrollbar"
                style={{
                    overflowX: 'auto',
                    display: 'flex',
                    cursor: 'grab',
                    scrollBehavior: 'auto', // Important: 'smooth' might interfere with continuous JS scrolling
                    whiteSpace: 'nowrap',
                    paddingBottom: '2rem' // Space for scrollbar if visible (hidden via CSS usually)
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchStart={() => setIsHovering(true)}
                onTouchEnd={() => setIsHovering(false)}
            >
                <div style={{ display: 'flex', gap: '4rem', paddingLeft: '2rem' }}>
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
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 200
                        }}
                    >
                        <motion.div
                            style={{
                                background: '#fff',
                                padding: '1rem',
                                borderRadius: '4px',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                position: 'relative',
                                boxShadow: '0 0 50px rgba(211, 84, 0, 0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: 0,
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: '3rem',
                                    cursor: 'pointer'
                                }}
                            >
                                &times;
                            </button>
                            <img
                                src={selectedId.src}
                                alt={selectedId.title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                    objectFit: 'contain',
                                    border: '4px solid var(--saffron)'
                                }}
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
