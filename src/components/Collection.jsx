import { useLanguage } from '../i18n/LanguageContext';
import { COLLECTIONS, PRODUCTS } from '../data/products';
import ProductVisual from './ProductVisual';
import OrderLink from './OrderLink';

// Featured seasonal collection — three creations, each with its own order link.
export default function Collection({ season, bgClass = 'bg-pearl', id }) {
  const { t } = useLanguage();
  const { products, tone, glow } = COLLECTIONS[season];

  return (
    <section id={id} className={`${bgClass} py-28 md:py-40 px-8 lg:px-20 xl:px-32`}>
      <div className="max-w-6xl mx-auto reveal">
        <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-muted mb-3 text-center">
          {t(`${season}_label`)}
        </p>
        <h2 className="font-spectral text-[clamp(2rem,4vw,3.5rem)] text-header mb-4 text-center">
          {t(`${season}_title`)}
        </h2>
        <p className="font-spectral italic text-[clamp(1rem,1.6vw,1.2rem)] text-muted text-center max-w-xl mx-auto mb-16 md:mb-20">
          {t(`${season}_desc`)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-12 mb-16" data-stagger>
          {products.map((key) => (
            <div key={key} className="text-center" data-stagger-child>
              <div className="img-hover-zoom">
                <ProductVisual product={PRODUCTS[key]} tone={tone} glow={glow} />
              </div>
              <p className="font-jost text-[13px] text-graphite tracking-[0.35em] mt-5">
                {PRODUCTS[key].name}
              </p>
              <p className="font-spectral text-muted mt-1 mb-4">
                {t(`tag_${key}`)}
              </p>
              <OrderLink style="text">{t('order')}</OrderLink>
            </div>
          ))}
        </div>

        <div className="text-center">
          <OrderLink>{t(`${season}_cta`)}</OrderLink>
        </div>
      </div>
    </section>
  );
}
