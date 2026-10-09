// Order link — every "Order" button points here.
// Replace with the official Picasso of Pastry page / Messenger link when ready.
export const ORDER_URL = 'https://www.facebook.com/al.consulta.bacolod';

// Launch: November 3, 2026, 10:00 AM Cebu time (PHT = UTC+8)
export const LAUNCH_DATE = new Date('2026-11-03T10:00:00+08:00');

// Products. `image` is optional — drop a photo in /public/images/products/
// and set the path here; until then the burgundy box artwork is shown.
export const PRODUCTS = {
  sansrival: { name: 'SANS RIVAL', image: null },
  godsfood: { name: 'FOOD FOR THE GODS', image: null },
  bibingka: { name: 'BIBINGKA CHEESECAKE', image: null },

  silvanas: { name: 'SILVANAS', image: null },
  cupcakes: { name: 'COUTURE CUPCAKES', image: null },
  yema: { name: 'YEMA CAKE', image: null },

  mango: { name: 'MANGO ROYALE', image: null },
  buko: { name: 'BUKO PANDAN PIE', image: null },
  calamansi: { name: 'CALAMANSI TART', image: null },

  torta: { name: 'TORTA DE ARGAO', image: null },
  tablea: { name: 'TABLEA CHOCOLATE CAKE', image: null },
  ensaymada: { name: 'QUESO ENSAYMADA', image: null },

  brazo: { name: "MAMA'S BRAZO DE MERCEDES", image: null },
  banana: { name: 'MOIST BANANA CHEESECAKE', image: null },
  ube: { name: 'UBE CHEESECAKE', image: null },
};

// Four seasonal collections (Philippine calendar), three creations each.
// `tone` sets the box colour, `glow` the backdrop light.
export const COLLECTIONS = {
  paskuhan: { products: ['sansrival', 'godsfood', 'bibingka'], tone: 'burgundy', glow: '#7A2236' },
  fiesta: { products: ['silvanas', 'cupcakes', 'yema'], tone: 'bordeaux', glow: '#8A3A2A' },
  taginit: { products: ['mango', 'buko', 'calamansi'], tone: 'burgundy', glow: '#9A6A2A' },
  tagulan: { products: ['torta', 'tablea', 'ensaymada'], tone: 'plum', glow: '#4A2A3A' },
};

// Year-round signatures — Mama's recipes.
export const HEIRLOOM = ['brazo', 'banana', 'ube'];
