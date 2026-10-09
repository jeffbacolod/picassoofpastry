import { useLanguage } from '../i18n/LanguageContext';
import { PRODUCTS } from '../data/products';
import ProductVisual from './ProductVisual';
import OrderLink from './OrderLink';

const PAIR = [
  { key: 'banana', tone: 'burgundy', glow: '#A0702E' },
  { key: 'ube', tone: 'ube', glow: '#6A3A86' },
];

// Completing the Heirloom trio — the two year-round cheesecakes.
export default function Heirloom() {
  const { t } = useLanguage();

  return (
    <section className="bg-plum py-24 md:py-36 px-8 lg:px-20 xl:px-32">
      <div className="max-w-4xl mx-auto text-center reveal">
        <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-champagne mb-6">
          {t('heirloom_label')}
        </p>
        <h2 className="font-jost text-[clamp(1.75rem,5vw,3.5rem)] text-pearl leading-[1.1] tracking-[0.2em] mb-5">
          {t('heirloom_heading')}
        </h2>
        <p className="font-spectral text-[clamp(1rem,2vw,1.25rem)] text-pearl/60 max-w-xl mx-auto mb-14">
          {t('heirloom_sub')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16" data-stagger>
          {PAIR.map(({ key, tone, glow }) => (
            <div key={key} data-stagger-child>
              <div className="img-hover-zoom border border-champagne/20">
                <ProductVisual product={PRODUCTS[key]} tone={tone} glow={glow} aspect="aspect-[5/6]" />
              </div>
              <p className="font-jost text-[13px] text-pearl tracking-[0.35em] mt-5">
                {PRODUCTS[key].name}
              </p>
              <p className="font-spectral text-pearl/60 mt-1 mb-5">
                {t(`tag_${key}`)}
              </p>
              <OrderLink style="textLight">{t('order')}</OrderLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
