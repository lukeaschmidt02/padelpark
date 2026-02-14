export const PLAY_SLOTS = [
    { id: 1, time: '07:00', price: 40, status: 'available' },
    { id: 2, time: '08:30', price: 40, status: 'booked' },
    { id: 3, time: '10:00', price: 50, status: 'available' },
    { id: 4, time: '11:30', price: 50, status: 'available' },
    { id: 5, time: '13:00', price: 40, status: 'available' },
    { id: 6, time: '14:30', price: 40, status: 'booked' },
    { id: 7, time: '16:00', price: 60, status: 'available' },
    { id: 8, time: '17:30', price: 60, status: 'available' },
    { id: 9, time: '19:00', price: 60, status: 'booked' },
    { id: 10, time: '20:30', price: 50, status: 'available' },
];

export const MENU_ITEMS = [
    {
        category: 'Recovery',
        items: [
            { id: 'd1', name: 'Recovery Smoothie', description: 'Banana, protein, almond milk', price: 8 },
            { id: 'd3', name: 'Ace Espresso', description: 'Double shot', price: 3.5 },
            { id: 'd4', name: 'Hydration Water', description: 'Infused with cucumber & mint', price: 4 },
        ]
    },
    {
        category: 'Social',
        items: [
            { id: 's1', name: 'Match Point Pilser', description: 'Local craft lager', price: 6 },
            { id: 's2', name: 'Padel Spritz', description: 'Prosecco, aperol, soda', price: 12 },
            { id: 's3', name: 'Court-side G&T', description: 'Botanical gin, tonic, lime', price: 10 },
        ]
    },
    {
        category: 'Eats',
        items: [
            { id: 'f1', name: 'Power Bowl', description: 'Quinoa, avocado, grilled chicken', price: 14 },
            { id: 'f2', name: 'Tapas Platter', description: 'Selection of spanish bites', price: 18 },
            { id: 'f3', name: 'Avocado Toast', description: 'Sourdough, chili flakes', price: 10 },
        ]
    }
];
