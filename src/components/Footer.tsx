import { Instagram, Facebook } from 'lucide-react';
import PadelLogo from '../assets/Padel Park Logo.png';
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
                    <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                        <img src={PadelLogo} alt="Padel Park" style={{ height: '50px', objectFit: 'contain' }} />
                    </Link>
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
                        <Link to="/menu" style={{ color: 'var(--color-text-dim)' }}>Menu</Link>
                        <Link to="/about" style={{ color: 'var(--color-text-dim)' }}>About Us</Link>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'white' }}>Connect</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://instagram.com/wearepadelpark" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.2s' }}><Instagram size={24} /></a>
                        <a href="https://facebook.com/wearepadelpark" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.2s' }}><Facebook size={24} /></a>
                        <a href="https://tiktok.com/@wearepadelpark" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.2s' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                        <a href="https://x.com/wearepadelpark" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                    <p style={{ marginTop: '1rem', color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
                        info@wearepadelpark.com
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
                © {new Date().getFullYear()} Padel Park. All rights reserved.
            </div>
        </footer>
    );
}
