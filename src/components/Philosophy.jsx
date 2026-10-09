import { useLanguage } from '../i18n/LanguageContext';
import { brandify } from '../utils/brandify';

const LETTERS = ['P', 'A', 'S', 'T', 'R', 'Y'];

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="bg-pearl py-28 md:py-40 px-8 lg:px-20 xl:px-32">
      {/* Pastry philosophy — manifesto */}
      <div className="max-w-3xl mx-auto text-center mb-28 md:mb-36 reveal">
        <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-muted mb-3">
          {t('philosophy_label')}
        </p>
        <h2 className="font-spectral text-[clamp(2rem,4vw,3.25rem)] text-header leading-[1.15] mb-10">
          {t('philosophy_headline')}
        </h2>
        <div className="gold-rule w-16 mx-auto mb-10" />
        <p className="font-spectral text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.75] text-graphite/85 mb-6">
          {t('philosophy_p1')}
        </p>
        <p className="font-spectral text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.75] text-graphite/85 mb-6">
          {t('philosophy_p2')}
        </p>
        <p className="font-spectral italic text-[clamp(1.1rem,1.8vw,1.35rem)] text-burgundy">
          {t('philosophy_p3')}
        </p>
      </div>

      {/* Values — P.A.S.T.R.Y. */}
      <div className="max-w-6xl mx-auto reveal">
        <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-muted mb-3 text-center">
          {t('values_label')}
        </p>
        <h2 className="font-spectral text-[clamp(2rem,4vw,3rem)] text-header text-center mb-4">
          {brandify(t('values_headline'))}
        </h2>
        <p className="font-jost text-[13px] tracking-[0.35em] text-champagne text-center mb-16 md:mb-20">
          P . A . S . T . R . Y .
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-6" data-stagger>
          {LETTERS.map((letter, i) => (
            <div key={letter} className="text-center" data-stagger-child>
              <p className="font-spectral text-[2.75rem] text-burgundy leading-none mb-4">
                {letter}
              </p>
              <div className="gold-rule w-8 mx-auto mb-4" />
              <h3 className="font-jost text-[12px] tracking-[0.2em] uppercase text-header mb-3">
                {t(`values_${i + 1}_title`).split('\n').map((line, li) => (
                  <span key={li} className="block">{line}</span>
                ))}
              </h3>
              <p className="font-jost text-[14px] leading-relaxed text-muted">
                {t(`values_${i + 1}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
