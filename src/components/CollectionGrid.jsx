import { useLanguage } from '../i18n/LanguageContext';
import { COLLECTIONS, PRODUCTS } from '../data/products';
import ProductVisual from './ProductVisual';
import OrderLink from './OrderLink';

const SEASONS = ['fiesta', 'taginit', 'tagulan'];

// The remaining three seasons, shown side by side with their three creations.
export default function CollectionGrid() {
  const { t } = useLanguage();

  return (
    <section className="bg-pearl py-28 md:py-40 px-8 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal">
          <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-muted mb-3">
            {t('seasons_label')}
          </p>
          <h2 className="font-spectral text-[clamp(2rem,4vw,3.25rem)] text-header">
            {t('seasons_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 reveal" data-stagger>
          {SEASONS.map((season) => {
            const { products, tone, glow } = COLLECTIONS[season];
            return (
              <div key={season} className="text-center flex flex-col" data-stagger-child>
                <p className="font-jost text-[11px] tracking-[0.3em] uppercase text-muted mb-3">
                  {t(`${season}_label`)}
                </p>
                <h3 className="font-spectral text-[clamp(1.5rem,2.6vw,2.25rem)] text-header mb-6">
                  {t(`${season}_title`)}
                </h3>
                <div className="img-hover-zoom mb-6">
                  <ProductVisual tone={tone} glow={glow} variant="stack" />
                </div>
                <p className="font-spectral italic text-muted mb-6 min-h-[3em]">
                  {t(`${season}_desc`)}
                </p>
                <ul className="space-y-4 mb-8">
                  {products.map((key) => (
                    <li key={key}>
                      <p className="font-jost text-[12px] text-graphite tracking-[0.3em]">
                        {PRODUCTS[key].name}
                      </p>
                      <p className="font-spectral text-[15px] text-muted">
                        {t(`tag_${key}`)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <OrderLink style="text">{t(`${season}_cta`)}</OrderLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
