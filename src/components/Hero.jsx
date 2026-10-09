import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ORDER_URL } from '../data/products';

const LUXURY_EASE = 'cubic-bezier(0.2, 0.6, 0.2, 1)';

export default function Hero() {
  const { t } = useLanguage();
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const timers = [];
    const animate = (el, delay) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      timers.push(setTimeout(() => {
        el.style.transition = `opacity 1.2s ${LUXURY_EASE}, transform 1.2s ${LUXURY_EASE}`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay));
    };

    animate(eyebrowRef.current, 300);
    animate(headlineRef.current, 600);
    animate(subRef.current, 950);
    animate(ctaRef.current, 1300);
    return () => timers.forEach(clearTimeout);
  }, []);

  // Subtle parallax on hero background
  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const handleScroll = () => {
      bg.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full flex items-start md:items-center bg-bordeaux md:bg-plum overflow-hidden">
      {/* Background photo — moist ube cheesecake on burgundy velvet */}
      <img
        ref={bgRef}
        src="/images/hero/hero-ube-cheesecake.webp"
        srcSet="/images/hero/hero-ube-cheesecake-small.webp 800w, /images/hero/hero-ube-cheesecake.webp 1376w"
        sizes="100vw"
        alt=""
        fetchPriority="high"
        className="absolute bottom-0 left-0 w-full h-[56%] md:inset-0 md:h-full object-cover object-[86%_center] md:object-center z-0 will-change-transform"
      />
      {/* Phones: text on burgundy above, photo below. Desktop: left-side fade behind the text */}
      <div className="md:hidden absolute bottom-0 left-0 w-full h-[56%] z-[1] pointer-events-none bg-[linear-gradient(180deg,#4A0F1E_0%,rgba(74,15,30,0)_35%)]" />
      <div className="hidden md:block absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(90deg,rgba(43,9,18,0.88)_0%,rgba(43,9,18,0.55)_40%,rgba(43,9,18,0)_68%)]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(180deg,rgba(22,4,10,0.45)_0%,rgba(22,4,10,0)_22%,rgba(22,4,10,0)_75%,rgba(22,4,10,0.55)_100%)]" />
      {/* Fine gold frame */}
      <div className="absolute inset-5 md:inset-8 z-[1] border border-champagne/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 pt-28 sm:px-[8%] md:pt-0 lg:px-[10%] flex flex-col items-center text-center md:items-start md:text-left">
        <p ref={eyebrowRef} className="font-jost text-[11px] tracking-[0.45em] uppercase text-champagne mb-5 md:mb-8">
          {t('hero_eyebrow')}
        </p>
        <h1
          ref={headlineRef}
          className="font-spectral text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[1.05] text-pearl mb-5 md:mb-6 md:max-w-[9ch] lg:max-w-none"
        >
          {t('hero_headline')}
        </h1>
        <p
          ref={subRef}
          className="font-jost text-[clamp(0.8rem,1.4vw,1rem)] tracking-[0.4em] uppercase text-champagne-light/80 mb-8 md:mb-12"
        >
          {t('hero_sub')}
        </p>
        <div ref={ctaRef} className="flex flex-row gap-3 md:gap-4">
          <a
            href="#collections"
            className="inline-block font-jost text-[12px] tracking-[0.3em] uppercase px-5 sm:px-10 py-4 bg-pearl text-burgundy border border-pearl hover:bg-transparent hover:text-pearl transition-all duration-300 hover:tracking-[0.32em]"
          >
            {t('cta_discover')}
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-jost text-[12px] tracking-[0.3em] uppercase px-5 sm:px-10 py-4 border border-champagne text-champagne-light hover:bg-champagne hover:text-plum transition-all duration-300 hover:tracking-[0.32em]"
          >
            {t('cta_order')}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#collections" aria-label={t('cta_discover')} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-champagne/70 hover:text-champagne transition-colors">
        <span className="font-jost text-[10px] tracking-[0.4em] uppercase">{t('scroll')}</span>
        <span className="block w-px h-8 bg-champagne/60" />
      </a>
    </section>
  );
}
