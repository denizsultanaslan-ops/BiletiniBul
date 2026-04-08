export const USER_DATA = {
    name: 'Deniz',
    points: 450,
    activeTickets: [
        {
            id: 'at1',
            title: 'Danimarkalı (The Danish Girl)',
            type: 'Tiyatro',
            date: '12 Nisan 2026',
            location: 'Zorlu PSM',
            image: 'https://images.unsplash.com/photo-1507676184212-d0c30a510169?auto=format&fit=crop&q=80&w=800',
            price: 150,
            purchaseDate: '5 Nisan 2026, 14:30'
        },
        {
            id: 'at2',
            title: 'Hozier - Unreal Unearth Tour',
            type: 'Konser',
            date: '25 Mayıs 2026',
            location: 'Küçükçiftlik Park',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
            price: 850,
            purchaseDate: '2 Nisan 2026, 11:20'
        },
        {
            id: 'at3',
            title: 'Anatomy of a Fall',
            type: 'Sinema',
            date: '10 Nisan 2026',
            location: 'Atlas Sineması',
            image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
            price: 80,
            purchaseDate: '7 Nisan 2026, 18:45'
        }
    ],
    pastEvents: [
        { id: 'p1', title: 'Romeo ve Juliet', type: 'Tiyatro', date: '3 Nisan 2026', location: 'DasDas', points: 50, image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=400' },
        { id: 'p2', title: 'Mor ve Ötesi Senfonik', type: 'Konser', date: '15 Mart 2026', location: 'Zorlu PSM', points: 75, image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=400' },
        { id: 'p3', title: 'Fındıkkıran Balesi', type: 'Bale', date: '28 Şubat 2026', location: 'AKM', points: 60, image: 'https://images.unsplash.com/photo-1508700929628-666bc8bdcb5a?auto=format&fit=crop&q=80&w=400' },
        { id: 'p4', title: 'Dune: Part Two', type: 'Sinema', date: '10 Mart 2026', location: 'Paribu Cineverse', points: 30, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400' },
        { id: 'p5', title: 'Hamlet', type: 'Tiyatro', date: '20 Şubat 2026', location: 'Gülhane Parkı', points: 40, image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=400' },
        { id: 'p6', title: 'Le Nozze di Figaro', type: 'Opera', date: '5 Şubat 2026', location: 'Süreyya Operası', points: 80, image: 'https://images.unsplash.com/photo-1507676184212-d0c30a510169?auto=format&fit=crop&q=80&w=400' }
    ]
};

export const getCategoryStats = () => {
    const stats = {};
    USER_DATA.pastEvents.forEach(event => {
        stats[event.type] = (stats[event.type] || 0) + 1;
    });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
};
