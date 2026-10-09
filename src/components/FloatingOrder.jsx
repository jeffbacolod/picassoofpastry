import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ORDER_URL } from '../data/products';

// Small sticky order button on phones, shown after the hero.
export default function FloatingOrder() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`xl:hidden fixed bottom-5 right-5 z-40 font-jost text-[11px] tracking-[0.3em] uppercase px-6 py-3.5 bg-burgundy text-pearl border border-champagne/60 shadow-[0_8px_30px_rgba(43,9,18,0.35)] transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {t('cta_order')}
    </a>
  );
}
