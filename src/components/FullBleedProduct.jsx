import { useLanguage } from '../i18n/LanguageContext';
import { PRODUCTS } from '../data/products';
import ProductVisual from './ProductVisual';
import OrderLink from './OrderLink';

// Spotlight — Mama's Brazo de Mercedes, the soul of the Heirloom Collection.
export default function FullBleedProduct() {
  const { t } = useLanguage();

  return (
    <section className="bg-bordeaux py-24 md:py-36 px-8 lg:px-20 xl:px-32">
      <div className="max-w-5xl mx-auto text-center reveal">
        <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-champagne mb-6">
          {t('spotlight_label')}
        </p>
        <h2 className="font-jost text-[clamp(1.6rem,4.5vw,3.5rem)] text-pearl leading-[1.2] tracking-[0.3em] mb-5">
          {PRODUCTS.brazo.name}
        </h2>
        <p className="font-spectral italic text-[clamp(1.1rem,2vw,1.6rem)] text-champagne-light/80 mb-12">
          {t('tag_brazo')}
        </p>

        <div className="img-hover-zoom max-w-lg mx-auto mb-10 border border-champagne/25">
          <ProductVisual product={PRODUCTS.brazo} tone="burgundy" glow="#B0793A" />
        </div>

        <p className="font-jost text-[15px] leading-relaxed text-pearl/70 max-w-xl mx-auto mb-12">
          {t('spotlight_desc')}
        </p>

        <OrderLink style="light">{t('spotlight_cta')}</OrderLink>
      </div>
    </section>
  );
}
