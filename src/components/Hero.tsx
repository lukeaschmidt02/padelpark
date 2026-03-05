import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PadelLogo from '../assets/Padel Park Logo.png';

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
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '3rem 2rem',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '800px',
                width: '100%',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <img
                        src={PadelLogo}
                        alt="Padel Park"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            objectFit: 'contain',
                            marginBottom: '1rem',
                            marginTop: '1rem',
                            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 40px rgba(0, 150, 255, 0.2)) brightness(1.2) contrast(1.1)',
                        }}
                    /></motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
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
                style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-dim)',
                    marginBottom: 'var(--spacing-lg)',
                    maxWidth: '600px',
                }}>
                    Experience the ultimate social sport in a premium facility designed for players, by players.
                    Coming soon to the Southern Wake County Area.
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
