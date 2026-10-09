import { useLanguage } from '../i18n/LanguageContext';

const KEYS = ['marquee_1', 'marquee_2', 'marquee_3', 'marquee_4', 'marquee_5', 'marquee_6', 'marquee_7', 'marquee_8'];

export default function Marquee() {
  const { t } = useLanguage();
  const repeated = [...KEYS, ...KEYS];

  return (
    <section className="bg-bordeaux border-y border-champagne/25 py-5 overflow-hidden" aria-hidden="true">
      <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
        {repeated.map((key, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-jost text-[11px] tracking-[0.3em] uppercase text-champagne-light/85">
              {t(key)}
            </span>
            <span className="text-champagne text-[8px]">&#9670;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
