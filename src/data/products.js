// Order link — every "Order" button points here.
// Replace with the official Picasso of Pastry page / Messenger link when ready.
export const ORDER_URL = 'https://www.facebook.com/al.consulta.bacolod';

// Launch: November 3, 2026, 10:00 AM Cebu time (PHT = UTC+8)
export const LAUNCH_DATE = new Date('2026-11-03T10:00:00+08:00');

// Products. `image` is optional — drop a photo in /public/images/products/
// and set the path here; until then the window-box artwork is shown.
// `look` describes the pastry drawn inside the box window:
// type = roll | round | layer | pie | cupcakes | pieces, plus its colours.
export const PRODUCTS = {
  sansrival: { name: 'SANS RIVAL', image: null, look: { type: 'layer', a: '#E9D2A6', b: '#F7EEDC', top: '#E2C58E', dot: '#A86B34' } },
  godsfood: { name: 'FOOD FOR THE GODS', image: null, look: { type: 'pieces', shape: 'bar', a: '#6E4024', b: '#C9A26B' } },
  bibingka: { name: 'BIBINGKA CHEESECAKE', image: null, look: { type: 'round', a: '#F3E3B3', top: '#D9A055', dot: '#FBF4E4', crust: '#5E7A3A' } },

  silvanas: { name: 'SILVANAS', image: null, look: { type: 'pieces', shape: 'oval', a: '#E8D3A8', b: '#C79A5E' } },
  cupcakes: { name: 'COUTURE CUPCAKES', image: null, look: { type: 'cupcakes', a: '#C9A96E', b: '#F4E6D8', c: '#B3223A' } },
  yema: { name: 'YEMA CAKE', image: null, look: { type: 'round', a: '#F7DE8C', top: '#E9B949', dot: '#FFF3C4', crust: '#E8C46A' } },

  mango: { name: 'MANGO ROYALE', image: null, look: { type: 'layer', a: '#F7EEDC', b: '#D9B27A', top: '#F2A93B', dot: '#F7C04A' } },
  buko: { name: 'BUKO PANDAN PIE', image: null, look: { type: 'pie', a: '#D6A35C', b: '#DCE8C4', c: '#F7F3E8' } },
  calamansi: { name: 'CALAMANSI TART', image: null, look: { type: 'pie', a: '#D6A35C', b: '#E7DA6C', c: '#FBF5E6' } },

  torta: { name: 'TORTA DE ARGAO', image: null, look: { type: 'pieces', shape: 'dome', a: '#D99A4E', b: '#F5EBD8' } },
  tablea: { name: 'TABLEA CHOCOLATE CAKE', image: null, look: { type: 'layer', a: '#3A1F17', b: '#5B3424', top: '#2A140E', dot: '#C9A96E' } },
  ensaymada: { name: 'QUESO ENSAYMADA', image: null, look: { type: 'pieces', shape: 'swirl', a: '#E8B871', b: '#F5DA7A' } },

  brazo: { name: "MAMA'S BRAZO DE MERCEDES", image: null, look: { type: 'roll', a: '#F6E9CF', b: '#C98F4E', c: '#F2C14E' } },
  banana: { name: 'MOIST BANANA CHEESECAKE', image: null, look: { type: 'round', a: '#F3E6C4', top: '#E7C766', dot: '#F8EDC8', crust: '#B9824A' } },
  ube: { name: 'MOIST UBE CHEESECAKE', image: null, look: { type: 'round', a: '#9B6BB3', top: '#7A4A97', dot: '#E8D9F0', crust: '#B9824A' } },
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
