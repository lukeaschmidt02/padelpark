import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../data/mockData';
import { useState } from 'react';

export function EatDrink() {
    const [activeTab, setActiveTab] = useState<'Recovery' | 'Social' | 'Eats'>('Recovery');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div style={{
            padding: '120px 2rem 4rem',
            maxWidth: '1000px',
            margin: '0 auto',
            minHeight: '100vh',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}
            >
                <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-sm)' }}>
                    Refuel & Socialize
                </h1>
                <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                    Post-game refreshments and healthy bites in our social lounge.
                </p>
            </motion.div>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: 'var(--spacing-md)' }}>
                {['Recovery', 'Social', 'Eats'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        style={{
                            fontSize: '1.5rem',
                            backgroundColor: 'transparent',
                            color: activeTab === tab ? 'var(--color-primary)' : 'var(--color-text-dim)',
                            borderBottom: activeTab === tab ? '2px solid var(--color-primary)' : '2px solid transparent',
                            paddingBottom: '0.5rem',
                            transition: 'all 0.3s'
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Menu List */}
            <motion.div
                key={activeTab} // Re-animate when tab changes
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'grid',
                    gap: '1rem',
                }}
            >
                {MENU_ITEMS.find(c => c.category === activeTab)?.items.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1.5rem',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid rgba(255,255,255,0.05)',
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{item.name}</h3>
                            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>{item.description}</p>
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                            ${item.price}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
