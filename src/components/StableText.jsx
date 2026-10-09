import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import { LANGUAGES } from '../i18n/languages';

/**
 * Renders a translation in a box as wide as its longest translation,
 * so menus and buttons never shift when the language changes.
 * All versions share one grid cell; only the active one is visible.
 */
export default function StableText({ k }) {
  const { lang } = useLanguage();

  return (
    <span className="inline-grid justify-items-center">
      {LANGUAGES.map(({ key }) => (
        <span
          key={key}
          aria-hidden={key !== lang}
          className={`[grid-area:1/1] whitespace-nowrap ${key === lang ? '' : 'invisible'}`}
        >
          {translations[key]?.[k] || translations.en[k]}
        </span>
      ))}
    </span>
  );
}
