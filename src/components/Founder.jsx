import { useLanguage } from '../i18n/LanguageContext';
import { brandify } from '../utils/brandify';

export default function Founder() {
  const { t } = useLanguage();

  return (
    <section className="bg-linen py-32 md:py-44 px-8 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center reveal">
        {/* Portrait */}
        <figure>
          <div className="img-hover-zoom border border-champagne/40 p-3 bg-pearl">
            <img
              src="/images/chef/chef-al.webp"
              alt="Chef Al-joffri Bacolod"
              className="w-full aspect-[4/5] object-cover object-top"
              loading="lazy"
            />
          </div>
          <figcaption className="font-jost text-[11px] tracking-[0.3em] uppercase text-muted mt-4 text-center">
            {t('founder_caption')}
          </figcaption>
        </figure>

        {/* Letter */}
        <div>
          <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-muted mb-4">
            {t('founder_label')}
          </p>
          <h2 className="font-spectral text-[clamp(2rem,4vw,3.5rem)] text-header leading-[1.1] mb-6">
            {t('founder_headline')}
          </h2>
          <p className="font-spectral text-[clamp(1.25rem,2.5vw,1.75rem)] text-header leading-snug mb-6">
            {t('founder_salutation')}
          </p>
          {['founder_p1', 'founder_p2', 'founder_p3'].map((key) => (
            <p key={key} className="font-jost text-[15px] leading-relaxed text-graphite/85 mb-6">
              {brandify(t(key))}
            </p>
          ))}
          <p className="font-jost text-[15px] leading-relaxed text-graphite/85 mb-8">
            {brandify(t('founder_p4'))}
          </p>
          <p className="font-spectral italic text-[clamp(1.1rem,2vw,1.4rem)] text-burgundy mb-1">
            {t('founder_closing')}
          </p>
          <p className="font-spectral text-[clamp(1.1rem,2vw,1.4rem)] text-header/80">
            {t('founder_signature')}
          </p>
        </div>
      </div>
    </section>
  );
}
