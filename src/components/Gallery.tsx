import { motion } from 'framer-motion';
import PadelCourt1 from '../assets/Padel Court.png';
import PadelCourt2 from '../assets/Padel Court 2.png';
import PadelCourt3 from '../assets/Padel Court 3.png';

export function Gallery() {
    const images = [
        { src: PadelCourt1, alt: 'Neon Padel Court Action', span: 'col-span-2' },
        { src: PadelCourt2, alt: 'Premium Court Surface', span: 'col-span-1' },
        { src: PadelCourt3, alt: 'Social Lounge Vibes', span: 'col-span-1' },
    ];

    return (
        <section style={{
            padding: 'var(--spacing-xl) 2rem',
            maxWidth: '1200px',
            margin: '0 auto',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}
            >
                <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-sm)' }}>
                    Experience <span style={{ color: 'var(--color-primary)' }}>PADELX</span>
                </h2>
                <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                    Immerse yourself in our world-class facilities designed for peak performance and social connection.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
            }}>
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            position: 'relative',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            height: '300px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        }}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.8) contrast(1.1)',
                                transition: 'filter 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1) contrast(1)'}
                            onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0.8) contrast(1.1)'}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            padding: '1rem',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                            color: 'white',
                            pointerEvents: 'none',
                        }}>
                            {/* Optional Caption if needed */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
