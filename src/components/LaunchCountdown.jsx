import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LAUNCH_DATE, ORDER_URL } from '../data/products';

function getTimeLeft() {
  const diff = LAUNCH_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    launched: false,
  };
}

export default function LaunchCountdown() {
  const { t } = useLanguage();
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: t('countdown_days') },
    { value: time.hours, label: t('countdown_hours') },
    { value: time.minutes, label: t('countdown_minutes') },
    { value: time.seconds, label: t('countdown_seconds') },
  ];

  return (
    <section className="bg-linen py-20 md:py-28 px-8 lg:px-20 xl:px-32">
      <div className="max-w-4xl mx-auto text-center reveal">
        <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-muted mb-6">
          {t('countdown_label')}
        </p>
        <p className="font-spectral text-[clamp(3rem,12vw,8rem)] leading-none text-burgundy tracking-wide mb-3">
          {t('countdown_big')}
        </p>
        <p className="font-spectral italic text-[clamp(1rem,2vw,1.25rem)] text-muted mb-12">
          {t('countdown_date')}
        </p>

        {!time.launched ? (
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto mb-12">
            {units.map(({ value, label }) => (
              <div key={label}>
                <p className="font-spectral text-[clamp(1.75rem,4vw,3rem)] text-header leading-none tabular-nums">
                  {String(value).padStart(2, '0')}
                </p>
                <div className="gold-rule w-8 mx-auto my-3" />
                <p className="font-jost text-[9px] md:text-[11px] tracking-[0.3em] uppercase text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-spectral text-[clamp(1.25rem,2.5vw,2rem)] text-header mb-12">
            {t('countdown_live')}
          </p>
        )}

        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-jost text-[12px] tracking-[0.3em] uppercase px-8 py-3.5 bg-burgundy text-pearl hover:bg-transparent hover:text-burgundy border border-burgundy transition-colors duration-300"
        >
          {t('countdown_cta')}
        </a>
      </div>
    </section>
  );
}
