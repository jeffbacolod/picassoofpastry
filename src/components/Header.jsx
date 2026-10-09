import { useState, useEffect } from 'react';
import { ORDER_URL } from '../data/products';
import LanguageSwitch from './LanguageSwitch';
import StableText from './StableText';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  const navItems = [
    { key: 'nav_collections', href: '#collections' },
    { key: 'nav_story', href: '#story' },
    { key: 'nav_philosophy', href: '#philosophy' },
    { key: 'nav_order', href: '#order' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-pearl/95 backdrop-blur shadow-[0_1px_0_0_var(--color-stone)]' : 'bg-transparent'
      }`}
    >
      {/* At the top of the page the row sits well inside the hero's gold frame; once scrolled it tightens into a compact bar */}
      <div
        className={`flex items-center justify-between transition-all duration-500 ${
          solid
            ? 'px-6 py-5 sm:px-[5%] xl:px-[3.5%] 2xl:px-[8%]'
            : 'px-12 pt-11 pb-5 sm:px-[7%] md:pt-16 xl:px-[5%] 2xl:px-[8%]'
        }`}
      >
        {/* Wordmark */}
        <a
          href="#top"
          className={`shrink-0 font-playfair text-[15px] sm:text-lg font-bold tracking-[0.22em] uppercase transition-colors duration-500 ${
            solid ? 'text-burgundy' : 'text-pearl'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Picasso of Pastry
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex flex-1 justify-center items-center gap-5 2xl:gap-10 mx-5">
          {navItems.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className={`font-jost text-[12px] tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300 ${
                solid ? 'text-muted hover:text-burgundy' : 'text-pearl/70 hover:text-pearl'
              }`}
            >
              <StableText k={key} />
            </a>
          ))}
        </nav>

        {/* Right side: Language + Order */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-8 shrink-0">
          <LanguageSwitch light={!solid} />
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-jost text-[11px] tracking-[0.3em] uppercase px-6 py-3 border transition-colors duration-300 ${
              solid
                ? 'bg-burgundy text-pearl border-burgundy hover:bg-transparent hover:text-burgundy'
                : 'border-champagne text-champagne-light hover:bg-champagne hover:text-plum'
            }`}
          >
            <StableText k="cta_order" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${solid ? 'bg-burgundy' : 'bg-pearl'} ${
            menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
          }`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${solid ? 'bg-burgundy' : 'bg-pearl'} ${
            menuOpen ? '-rotate-45 -translate-y-[1.5px]' : ''
          }`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-500 bg-pearl ${
        menuOpen ? 'max-h-[28rem]' : 'max-h-0'
      }`}>
        <nav className="flex flex-col items-center gap-6 py-8">
          {navItems.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="font-jost text-[13px] tracking-[0.25em] uppercase text-muted hover:text-burgundy transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <StableText k={key} />
            </a>
          ))}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-jost text-[12px] tracking-[0.3em] uppercase px-8 py-3.5 bg-burgundy text-pearl border border-burgundy"
          >
            <StableText k="cta_order" />
          </a>
          <LanguageSwitch className="pt-4 border-t border-stone/40" />
        </nav>
      </div>
    </header>
  );
}
