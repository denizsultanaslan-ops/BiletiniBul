export const MOCK_EVENTS = [
  // --- ÖNE ÇIKAN (Hero için) ---
  { id: 101, title: 'Bahar Festivali 2026', type: 'Konferans', location: 'Santralİstanbul', date: '15-18 Nisan 2026', studentPrice: '₺200', isFree: false, isFuture: true, isOutdoor: true, isWeekend: true, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&q=80&w=1200' },

  // --- KONSERLER (10 Adet) ---
  { id: 201, title: 'Duman', type: 'Konser', location: 'Küçükçiftlik Park', date: '20 Mayıs 2026', studentPrice: '₺250', isFree: false, isFuture: false, isOutdoor: true, isWeekend: false, image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800' },
  { id: 202, title: 'Dolu Kadehi Ters Tut', type: 'Konser', location: 'Zorlu PSM', date: '22 Mayıs 2026', studentPrice: '₺200', isFree: false, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800' },
  { id: 203, title: 'Model', type: 'Konser', location: 'Harbiye Açıkhava', date: '5 Haziran 2026', studentPrice: '₺300', isFree: false, isFuture: true, isOutdoor: true, isWeekend: false, image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800' },
  { id: 204, title: 'Büyük Ev Ablukada', type: 'Konser', location: 'DasDas', date: '15 Mayıs 2026', studentPrice: '₺180', isFree: false, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800' },
  { id: 205, title: 'Manifest', type: 'Konser', location: 'Blind İstanbul', date: '12 Mayıs 2026', studentPrice: '₺0', isFree: true, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800' },
  { id: 206, title: 'Yüzyüzeyken Konuşuruz', type: 'Konser', location: 'Kuruçeşme', date: '30 Mayıs 2026', studentPrice: '₺220', isFree: false, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800' },
  { id: 207, title: 'Kalben', type: 'Konser', location: 'Zorlu PSM Drama', date: '18 Mayıs 2026', studentPrice: '₺150', isFree: false, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80&w=800' },
  { id: 208, title: 'Adamlar', type: 'Konser', location: 'Volkswagen Arena', date: '10 Haziran 2026', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=800' },
  { id: 209, title: 'Jabbar', type: 'Konser', location: 'Babylon Bomonti', date: '25 Mayıs 2026', studentPrice: '₺140', isFree: false, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800' },
  { id: 210, title: 'Madrigal', type: 'Konser', location: 'Vodafone Park', date: '1 Temmuz 2026', studentPrice: '₺180', isFree: false, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800' },

  // --- TİYATROLAR (10 Adet) ---
  { id: 301, title: 'Cimri', type: 'Tiyatro', location: 'DT Şişli', studentPrice: '₺40', isFree: false, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80&w=800' },
  { id: 302, title: 'Bir Baba Hamlet', type: 'Tiyatro', location: 'DasDas', studentPrice: '₺120', isFree: false, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1507676184212-d0c30a510169?auto=format&fit=crop&q=80&w=800' },
  { id: 303, title: 'Saatleri Ayarlama Enstitüsü', type: 'Tiyatro', location: 'Maximum Uniq', studentPrice: '₺250', isFree: false, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&q=80&w=800' },
  { id: 304, title: 'Zengin Mutfağı', type: 'Tiyatro', location: 'Harbiye Açıkhava', studentPrice: '₺600', isFree: false, isFuture: false, isOutdoor: true, isWeekend: false, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&q=80&w=800' },
  { id: 305, title: 'Huysuz', type: 'Tiyatro', location: 'DasDas Mini', studentPrice: '₺0', isFree: true, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=800' },
  { id: 306, title: 'Amadeus', type: 'Tiyatro', location: 'Zorlu PSM', studentPrice: '₺400', isFree: false, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1508700929628-666bc8bdcb5a?auto=format&fit=crop&q=80&w=800' },
  { id: 307, title: 'Kadınlar Filler ve Saire', type: 'Tiyatro', location: 'Kadıköy Halk T.', studentPrice: '₺100', isFree: false, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1507676184212-d0c30a510169?auto=format&fit=crop&q=80&w=800' },
  { id: 308, title: 'Ferhangi Şeyler', type: 'Tiyatro', location: 'Ses Tiyatrosu', studentPrice: '₺150', isFree: false, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1543783230-2783852026df?auto=format&fit=crop&q=80&w=800' },
  { id: 309, title: 'Aşk Hikayesi', type: 'Tiyatro', location: 'Moda Sahnesi', studentPrice: '₺100', isFree: false, isFuture: true, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1460723235802-5829c425049b?auto=format&fit=crop&q=80&w=800' },
  { id: 310, title: 'Hamlet', type: 'Tiyatro', location: 'Gülhane Parkı', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: true, isWeekend: true, image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=800' },

  // --- OPERA & BALE (6 Adet) ---
  { id: 701, title: 'Kuğu Gölü', type: 'Bale', location: 'Süreyya Operası', studentPrice: '₺150', isFree: false, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&q=80&w=800' },
  { id: 702, title: 'Carmen', type: 'Opera', location: 'Zorlu PSM', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1507676184212-d0c30a510169?auto=format&fit=crop&q=80&w=800' },
  { id: 703, title: 'Fındıkkıran', type: 'Bale', location: 'AKM Opera Sal.', studentPrice: '₺180', isFree: false, isFuture: true, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1508700929628-666bc8bdcb5a?auto=format&fit=crop&q=80&w=800' },
  { id: 704, title: 'Saraya Kaçış', type: 'Opera', location: 'Kalamış Parkı', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: true, isWeekend: false, image: 'https://images.unsplash.com/photo-1460723235802-5829c425049b?auto=format&fit=crop&q=80&w=800' },
  { id: 705, title: 'La Traviata', type: 'Opera', location: 'Süreyya Operası', studentPrice: '₺120', isFree: false, isFuture: true, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1507676184212-d0c30a510169?auto=format&fit=crop&q=80&w=800' },
  { id: 706, title: 'Don Kişot', type: 'Bale', location: 'AKM', studentPrice: '₺140', isFree: false, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=800' },

  // --- SİNEMA (6 Adet) ---
  { id: 501, title: 'Dune 3', type: 'Sinema', location: 'Paribu Cineverse', studentPrice: '₺90', isFree: false, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800', promoTag: '2. Bilet %25 İndirimli' },
  { id: 502, title: 'Batman 2', type: 'Sinema', location: 'Citys Nişantaşı', studentPrice: '₺100', isFree: false, isFuture: true, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800' },
  { id: 503, title: 'Açık Deniz', type: 'Sinema', location: 'Emaar Sky Cinema', studentPrice: '₺120', isFree: false, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800' },
  { id: 504, title: 'Oppenheimer: Revisited', type: 'Sinema', location: 'Kadıköy Sineması', studentPrice: '₺70', isFree: false, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800' },
  { id: 505, title: 'Barbie 2', type: 'Sinema', location: 'Zorlu Cinemaximum', studentPrice: '₺150', isFree: false, isFuture: true, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800' },
  { id: 506, title: 'Past Lives', type: 'Sinema', location: 'Atlas Sineması', studentPrice: '₺80', isFree: false, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800' },

  // --- MÜZELER (6 Adet) ---
  { id: 601, title: 'İstanbul Modern', type: 'Müze', location: 'Karaköy', studentPrice: '₺0', isFree: true, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1518998053401-b264d1c9ef08?auto=format&fit=crop&q=80&w=800' },
  { id: 602, title: 'Pera Müzesi', type: 'Müze', location: 'Pera', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800' },
  { id: 603, title: 'Rahmi Koç Müzesi', type: 'Müze', location: 'Haliç', studentPrice: '₺50', isFree: false, isFuture: false, isOutdoor: true, isWeekend: true, image: 'https://images.unsplash.com/photo-1566127444979-b3d2b638aba6?auto=format&fit=crop&q=80&w=800' },
  { id: 604, title: 'Sakıp Sabancı Müzesi', type: 'Müze', location: 'Emirgan', studentPrice: '₺60', isFree: false, isFuture: false, isOutdoor: true, isWeekend: true, image: 'https://images.unsplash.com/photo-1518998053401-b264d1c9ef08?auto=format&fit=crop&q=80&w=800' },
  { id: 605, title: 'Salt Beyoğlu: Karma Sergi', type: 'Müze', location: 'İstiklal Cad.', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?auto=format&fit=crop&q=80&w=800' },
  { id: 606, title: 'Müze Gazhane: Heykel', type: 'Müze', location: 'Kadıköy', studentPrice: '₺40', isFree: false, isFuture: false, isOutdoor: true, isWeekend: true, image: 'https://images.unsplash.com/photo-1544531586-fde5298c9412?auto=format&fit=crop&q=80&w=800' },

  // --- SÖYLEŞİLER (7 Adet) ---
  { id: 401, title: 'Celal Şengör ile Yer Bilim', type: 'Söyleşi', location: 'İTÜ Maslak', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' },
  { id: 402, title: 'TEDx İstanbul: Sınırların Ötesi', type: 'Söyleşi', location: 'Zorlu PSM', studentPrice: '₺250', isFree: false, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800' },
  { id: 403, title: 'Sinan Canan ile Açık Beyin', type: 'Söyleşi', location: 'ODTÜ KKM', studentPrice: '₺0', isFree: true, isFuture: false, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800' },
  { id: 404, title: 'Ceren Sungur ile Tarih Obası', type: 'Söyleşi', location: 'İTÜ SDKM', studentPrice: '₺0', isFree: true, isFuture: false, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=800' },
  { id: 405, title: 'Barış Özcan ile Hikaye Anlatıcılığı', type: 'Söyleşi', location: 'Harbiye Açıkhava', studentPrice: '₺150', isFree: false, isFuture: true, isOutdoor: true, isWeekend: false, image: 'https://images.unsplash.com/photo-1505373633560-fa9165083d32?auto=format&fit=crop&q=80&w=800' },
  { id: 406, title: 'Canan Karatay ile Sağlıklı Yaşam', type: 'Söyleşi', location: 'Bostancı Gösteri M.', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: false, isWeekend: true, image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800' },
  { id: 407, title: 'Koç Ailesi ile Girişimcilik', type: 'Söyleşi', location: 'Koç Üniv. KKM', studentPrice: '₺0', isFree: true, isFuture: true, isOutdoor: false, isWeekend: false, image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800' }
];

// Cleanup loop for full compatibility
MOCK_EVENTS.forEach(e => {
  if (!e.studentPriceNum) e.studentPriceNum = parseInt(e.studentPrice?.replace('₺', '') || '0');
  if (!e.address) e.address = 'İstanbul, Türkiye';
  if (!e.time) e.time = '19:00';
  if (e.date && !e.date.includes('2026')) e.date = `${e.date} 2026`;
  if (!e.description) e.description = `${e.title} etkinliği ile sanat dolu bir gün sizi bekliyor. Öğrenci dostu fiyatlarla yerinizi ayırtın!`;
});
