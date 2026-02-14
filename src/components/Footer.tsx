import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '4rem 2rem',
            marginTop: 'auto',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
            }}>
                {/* Brand */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
                        PADEL<span style={{ color: 'var(--color-primary)' }}>X</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                        The premier social padel experience. <br />
                        Join the community today.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'white' }}>Explore</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <Link to="/play" style={{ color: 'var(--color-text-dim)' }}>Book a Court</Link>
                        <Link to="/eat-drink" style={{ color: 'var(--color-text-dim)' }}>Eat & Drink</Link>
                        <Link to="/about" style={{ color: 'var(--color-text-dim)' }}>About Us</Link>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'white' }}>Connect</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: 'white', transition: 'color 0.2s' }}><Instagram size={24} /></a>
                        <a href="#" style={{ color: 'white', transition: 'color 0.2s' }}><Facebook size={24} /></a>
                        <a href="#" style={{ color: 'white', transition: 'color 0.2s' }}><Twitter size={24} /></a>
                        <a href="#" style={{ color: 'white', transition: 'color 0.2s' }}><Mail size={24} /></a>
                    </div>
                    <p style={{ marginTop: '1rem', color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
                        hello@padelx.com
                    </p>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--color-text-dim)',
                fontSize: '0.875rem'
            }}>
                © {new Date().getFullYear()} PADELX. All rights reserved.
            </div>
        </footer>
    );
}
