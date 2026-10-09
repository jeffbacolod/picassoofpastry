import { useLanguage } from '../i18n/LanguageContext';
import { ORDER_URL } from '../data/products';
import LanguageSwitch from './LanguageSwitch';

const COLLECTION_KEYS = ['paskuhan_title', 'fiesta_title', 'taginit_title', 'tagulan_title', 'heirloom_short'];

export default function Footer() {
  const { t } = useLanguage();
  const linkClass = 'font-jost text-[13px] text-pearl/65 hover:text-champagne-light transition-colors';

  return (
    <footer className="bg-plum text-pearl">
      <div className="gold-rule" />
      <div className="max-w-7xl mx-auto px-8 lg:px-20 xl:px-32 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Wordmark */}
          <div>
            <p className="font-playfair text-lg font-bold tracking-[0.22em] uppercase text-pearl mb-3">
              Picasso of Pastry
            </p>
            <p className="font-spectral italic text-[15px] text-champagne-light/80 mb-2">
              {t('footer_tagline')}
            </p>
            <p className="font-jost text-[12px] tracking-[0.2em] uppercase text-pearl/45">
              {t('footer_location')}
            </p>
          </div>

          {/* Column 2: Collections */}
          <div>
            <p className="font-jost text-[11px] tracking-[0.3em] uppercase text-champagne mb-4">
              {t('footer_collections')}
            </p>
            <ul className="space-y-2">
              {COLLECTION_KEYS.map((key) => (
                <li key={key}>
                  <a href="#collections" className={linkClass}>{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Atelier */}
          <div>
            <p className="font-jost text-[11px] tracking-[0.3em] uppercase text-champagne mb-4">
              {t('footer_house')}
            </p>
            <ul className="space-y-2">
              <li><a href="#story" className={linkClass}>{t('nav_story')}</a></li>
              <li><a href="#philosophy" className={linkClass}>{t('nav_philosophy')}</a></li>
              <li><a href="#order" className={linkClass}>{t('nav_order')}</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <p className="font-jost text-[11px] tracking-[0.3em] uppercase text-champagne mb-4">
              {t('footer_connect')}
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t('footer_facebook')}
                </a>
              </li>
              <li>
                <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {t('footer_messenger')}
                </a>
              </li>
            </ul>
            <LanguageSwitch light />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-champagne/15 px-8 lg:px-20 xl:px-32 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-jost text-[12px] text-pearl/45">
            &copy; 2026 <span className="font-playfair">Picasso of Pastry</span>. {t('footer_rights')}
          </p>
          <p className="font-jost text-[12px] text-pearl/45">
            {t('footer_chefs')}
          </p>
        </div>
      </div>
    </footer>
  );
}
