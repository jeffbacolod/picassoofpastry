/**
 * Wraps every occurrence of "Picasso of Pastry" in a string with the brand font (Playfair Display SC).
 * Returns JSX fragments so it can be used inline in any component.
 */
const BRAND = 'Picasso of Pastry';

export function brandify(text) {
  if (!text || !text.includes(BRAND)) return text;

  const parts = text.split(BRAND);
  return parts.reduce((acc, part, i) => {
    if (i === 0) return [part];
    return [
      ...acc,
      <span key={i} className="font-playfair">{BRAND}</span>,
      part,
    ];
  }, []);
}
