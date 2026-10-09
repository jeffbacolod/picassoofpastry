import { useLanguage } from '../i18n/LanguageContext';
import { brandify } from '../utils/brandify';

// Origin story — born in a mother's kitchen.
export default function Maison() {
  const { t } = useLanguage();

  return (
    <section id="story" className="bg-linen py-32 md:py-44 px-8 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center reveal">
        {/* Story */}
        <div>
          <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-muted mb-4">
            {t('maison_label')}
          </p>
          <h2 className="font-spectral text-[clamp(2rem,4vw,3.5rem)] text-header leading-[1.1] mb-8">
            {brandify(t('maison_headline'))}
          </h2>
          <p className="font-jost text-[15px] leading-relaxed text-graphite/85 mb-6">
            {t('maison_p1')}
          </p>
          <p className="font-jost text-[15px] leading-relaxed text-graphite/85 mb-6">
            {t('maison_p2')}
          </p>
          <p className="font-spectral italic text-[clamp(1.1rem,2vw,1.4rem)] text-burgundy">
            {t('maison_p3')}
          </p>
        </div>

        {/* Image */}
        <div className="img-hover-zoom">
          <img
            src="/images/collections/heirloom-trio.webp"
            alt="Mama's Brazo de Mercedes, Moist Banana Cheesecake and Moist Ube Cheesecake"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
