import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';
import { useState } from 'react';

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwjpHmY4d-GMZ3pYN7SA7nBzbh7-t6IiqvOSrt0J1SxP668HAMqrMlHt5EB2P59dTF5/exec';

export function RegisterInterest() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) {
            setStatus('error');
            setMessage('Configuration Error: Script URL not set.');
            console.error('Please set the GOOGLE_SCRIPT_URL in RegisterInterest.tsx');
            return;
        }

        setStatus('loading');

        try {
            const formData = new FormData();
            formData.append('Email', email);

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
            });

            // If the script redirects (which it usually does), fetch follows it transparently.
            // However, depending on network/CORS, we might not get JSON back if 'no-cors' strictly enforced
            // But typical GAS setups return JSON fine.

            const data = await response.json();

            if (data.result === 'success') {
                setStatus('success');
                setEmail('');
            } else if (data.result === 'error' && data.message === 'Email already exists') {
                setStatus('duplicate');
                setMessage('This email is already on the list!');
            } else {
                setStatus('error');
                setMessage('Something went wrong. Please try again.');
                console.error('Submission error:', data);
            }
        } catch (error) {
            console.error('Network error:', error);
            setStatus('error');
            setMessage('Network error. Please check your connection.');
        }
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

                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            color: 'var(--color-success)',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem'
                        }}
                    >
                        <Check size={48} />
                        Thanks! We'll be in touch soon.
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === 'loading'}
                                style={{
                                    padding: '1rem 1.5rem',
                                    borderRadius: 'var(--radius-full)',
                                    border: '1px solid #333',
                                    backgroundColor: 'var(--color-bg)',
                                    color: 'white',
                                    fontSize: '1rem',
                                    flex: '1',
                                    minWidth: '250px',
                                    maxWidth: '400px',
                                    outline: 'none',
                                    opacity: status === 'loading' ? 0.7 : 1,
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#333'}
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                style={{
                                    backgroundColor: 'var(--color-text)',
                                    color: 'var(--color-bg)',
                                    padding: '1rem 2rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.2s',
                                    opacity: status === 'loading' ? 0.7 : 1,
                                    cursor: status === 'loading' ? 'wait' : 'pointer',
                                }}
                                onMouseEnter={(e) => !status.includes('loading') && (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
                                onMouseLeave={(e) => !status.includes('loading') && (e.currentTarget.style.backgroundColor = 'var(--color-text)')}
                            >
                                {status === 'loading' ? 'Sending...' : 'Sign Up'} <Send size={18} />
                            </button>
                        </div>

                        {(status === 'error' || status === 'duplicate') && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    color: status === 'duplicate' ? 'var(--color-warning)' : 'var(--color-error)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: '0.5rem'
                                }}
                            >
                                <AlertCircle size={16} />
                                {message}
                            </motion.div>
                        )}
                    </form>
                )}
            </motion.div>
        </section>
    );
}

