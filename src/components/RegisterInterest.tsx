import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export function RegisterInterest() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Use setTimeout to simulate api call
        setTimeout(() => {
            setSubmitted(true);
            setEmail('');
        }, 1000);
    };

    return (
        <section id="register" style={{
            padding: 'var(--spacing-xl) var(--spacing-md)',
            backgroundColor: 'var(--color-surface)',
            textAlign: 'center',
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ maxWidth: '600px', margin: '0 auto' }}
            >
                <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-sm)' }}>
                    Be the First to Play
                </h2>
                <p style={{ color: 'var(--color-text-dim)', marginBottom: 'var(--spacing-md)' }}>
                    Sign up for exclusive early access and opening offers.
                </p>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: 'bold' }}
                    >
                        Thanks! We'll be in touch soon.
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                padding: '1rem 1.5rem',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid #333',
                                backgroundColor: 'var(--color-bg)',
                                color: 'white',
                                fontSize: '1rem',
                                flex: '1',
                                minWidth: '250px',
                                outline: 'none',
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = '#333'}
                        />
                        <button type="submit" style={{
                            backgroundColor: 'var(--color-text)',
                            color: 'var(--color-bg)',
                            padding: '1rem 2rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'background-color 0.2s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-text)'}
                        >
                            Sign Up <Send size={18} />
                        </button>
                    </form>
                )}
            </motion.div>
        </section>
    );
}
