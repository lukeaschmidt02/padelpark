import { motion } from 'framer-motion';
import { RegisterInterest } from '../components/RegisterInterest';

export function Play() {
    return (
        <div style={{
            padding: '120px 2rem 4rem',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 style={{
                    fontSize: 'var(--font-size-xxl)',
                    marginBottom: 'var(--spacing-md)',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                }}>
                    Bookings <span style={{ color: 'var(--color-primary)' }}>Opening Soon</span>
                </h1>

                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-dim)',
                    marginBottom: 'var(--spacing-xl)',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    We are finalizing our state-of-the-art courts. Register your interest to get early access and exclusive opening offers.
                </p>
            </motion.div>

            <div style={{ width: '100%', maxWidth: '600px', marginTop: '4rem' }}>
                <RegisterInterest />
            </div>
        </div>
    );
}
