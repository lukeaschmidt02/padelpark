import { useState } from 'react';
import PadelLogo from '../assets/Padel Cantina Logo.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, Coffee, Info, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Play', path: '/play', icon: Trophy },
        { name: 'Eat & Drink', path: '/eat-drink', icon: Coffee },
        { name: 'About', path: '/about', icon: Info },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 50,
            padding: 'var(--spacing-sm)',
        }}>
            <div style={{
                backgroundColor: 'rgba(26, 26, 26, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-full)',
                padding: '0.75rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={PadelLogo} alt="Padel Cantina" style={{ height: '80px', objectFit: 'contain' }} />
                </Link>

                {/* Desktop Links */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{
                                color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text)',
                                fontWeight: isActive(link.path) ? '600' : '400',
                                transition: 'color 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            {/* <link.icon size={16} /> */}
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button - Visible on small screens via CSS media queries */}
                {/* Note: In a real app we'd use CSS modules for media queries to hide/show desktop/mobile menus */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        color: 'white',
                        background: 'none',
                        display: 'none' // Hidden by default, show on mobile via CSS
                    }}
                    className="mobile-menu-btn"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: 'calc(100% + 1rem)',
                            left: '1rem',
                            right: '1rem',
                            backgroundColor: 'var(--color-surface)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center'
                        }}
                    >
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '1.25rem',
                                    color: isActive(link.path) ? 'var(--color-primary)' : 'white'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
