import { useLanguage } from '../i18n/LanguageContext';

export default function Quote() {
  const { t } = useLanguage();

  return (
    <section className="bg-pearl py-28 md:py-40 px-8 lg:px-20 xl:px-32">
      <div className="max-w-3xl mx-auto text-center reveal">
        <div className="gold-rule w-16 mx-auto mb-12" />
        <blockquote className="font-spectral text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.4] text-header">
          <span className="block">{t('quote_line1')}</span>
          <span className="block italic text-burgundy">{t('quote_line2')}</span>
        </blockquote>
        <div className="gold-rule w-16 mx-auto mt-12" />
      </div>
    </section>
  );
}
