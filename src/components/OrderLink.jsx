import { ORDER_URL } from '../data/products';

const STYLES = {
  solid: 'bg-burgundy text-pearl hover:bg-transparent hover:text-burgundy border border-burgundy',
  light: 'bg-pearl text-burgundy hover:bg-transparent hover:text-pearl border border-pearl',
  gold: 'border border-champagne text-champagne-light hover:bg-champagne hover:text-plum',
  text: 'text-burgundy border-b border-champagne hover:text-header !px-0 !py-1',
  textLight: 'text-champagne-light border-b border-champagne/60 hover:text-pearl !px-0 !py-1',
};

export default function OrderLink({ children, style = 'solid', className = '' }) {
  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-jost text-[12px] tracking-[0.3em] uppercase px-8 py-3.5 transition-all duration-300 hover:tracking-[0.32em] ${STYLES[style]} ${className}`}
    >
      {children}
    </a>
  );
}
