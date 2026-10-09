import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import OrderLink from './OrderLink';

// Final call to action: order via Facebook, or join the launch list.
export default function OrderSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to an email service (e.g. Mailchimp, Brevo) before launch.
    setEmail('');
    setSent(true);
  };

  return (
    <section id="order" className="bg-pearl">
      {/* Order */}
      <div className="bg-burgundy py-24 md:py-32 px-8 lg:px-20 xl:px-32">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="font-jost text-[11px] tracking-[0.35em] uppercase text-champagne mb-5">
            {t('order_label')}
          </p>
          <h2 className="font-spectral text-[clamp(2rem,4vw,3.25rem)] text-pearl mb-5">
            {t('order_head')}
          </h2>
          <p className="font-jost text-[15px] leading-relaxed text-pearl/70 mb-12">
            {t('order_sub')}
          </p>
          <OrderLink style="gold">{t('order_cta')}</OrderLink>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-20 md:py-28 px-8 lg:px-20 xl:px-32">
        <div className="max-w-xl mx-auto text-center reveal">
          <h2 className="font-spectral text-[clamp(1.75rem,3vw,2.5rem)] text-header mb-3">
            {t('newsletter_head')}
          </h2>
          <p className="font-jost text-[14px] text-muted mb-10">
            {sent ? t('newsletter_thanks') : t('newsletter_sub')}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email_placeholder')}
              aria-label={t('email_placeholder')}
              required
              className="flex-1 px-5 py-3.5 bg-transparent border border-stone font-jost text-[14px] text-graphite placeholder:text-muted/60 focus:outline-none focus:border-burgundy transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-burgundy text-pearl font-jost text-[12px] tracking-[0.3em] uppercase hover:bg-pearl hover:text-burgundy border border-burgundy transition-colors duration-300"
            >
              {t('subscribe')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
