import { motion } from 'framer-motion';
import Court3Image from '../assets/Padel Court 3.png';

export function Menu() {
    return (
        <div style={{
            padding: '120px 2rem 4rem',
            maxWidth: '1000px',
            margin: '0 auto',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-md)' }}
            >
                Our <span style={{ color: 'var(--color-primary)' }}>Menu</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ width: '100%', maxWidth: '800px', marginBottom: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                <img src={Court3Image} alt="Padel Park Lounge" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ maxWidth: '600px', lineHeight: '1.8', fontSize: '1.25rem', color: 'var(--color-text-dim)' }}
            >
                <p>
                    We'll be serving a curated selection of post-game snacks, refreshing beverages, and recovery drinks to help you refuel and socialize after your match.
                </p>
                <br />
                <p style={{ fontWeight: 'bold', color: 'white' }}>
                    Full menu coming soon!
                </p>
            </motion.div>
        </div>
    );
}
