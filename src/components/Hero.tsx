import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PadelLogo from '../assets/Padel Cantina Logo copy.png';

export function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            padding: '2rem',
            paddingTop: '120px', // Prevent navbar clipping
            textAlign: 'center',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <img
                    src={PadelLogo}
                    alt="Padel Cantina"
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                        objectFit: 'contain',
                        marginBottom: '1rem',
                        marginTop: '1rem',
                    }}
                />
                <h1 style={{
                    fontSize: 'var(--font-size-xxl)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    marginBottom: 'var(--spacing-md)',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                }}>
                    The Future of <br />
                    <span style={{ color: 'var(--color-primary)', textShadow: '0 0 20px var(--color-primary-glow)' }}>Padel</span> is Here
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-dim)',
                    marginBottom: 'var(--spacing-lg)',
                    maxWidth: '600px',
                }}>
                    Experience the ultimate social sport in a premium facility designed for players, by players.
                    Coming soon to [Location].
                </p>

                <a href="#register" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'var(--color-primary)',
                    color: 'black',
                    padding: '1rem 2rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    transition: 'transform 0.2s',
                    textDecoration: 'none'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Join the Waitlist <ArrowRight size={20} />
                </a>
            </motion.div>
        </section>
    );
}
