import { motion } from 'framer-motion';

export function About() {
    return (
        <div style={{
            padding: '120px 2rem 4rem',
            maxWidth: '900px',
            margin: '0 auto',
            minHeight: '100vh',
        }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}
            >
                About Padel <span style={{ color: 'var(--color-primary)' }}>Cantina</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--color-text-dim)' }}
            >
                <p style={{ marginBottom: '1.5rem' }}>
                    Born from a passion for the world's fastest-growing sport, Padel Cantina is more than just a place to play—it's a community hub.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    We believe in the power of social connection through sport. Our state-of-the-art facility features panoramic court walls, pro-grade turf, and acoustic dampening to ensure the perfect game every time.
                </p>
                <p>
                    After the match, our lounge offers a curated selection of recovery drinks and social eats, making it the perfect place to unwind and connect with fellow players.
                </p>
            </motion.div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                    marginTop: '4rem',
                    padding: '3rem',
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    border: '1px solid var(--color-primary-glow)'
                }}
            >
                <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Ready to join the revolution?</h2>
                <p style={{ color: 'var(--color-text-dim)' }}>Sign up for updates and we'll see you on the court soon.</p>
            </motion.div>
        </div>
    );
}
