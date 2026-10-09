import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/languages';

export default function LanguageSwitch({ light = false, className = '' }) {
  const { lang, switchLang } = useLanguage();
  const active = light ? 'text-pearl' : 'text-burgundy';
  const idle = light ? 'text-pearl/55 hover:text-pearl' : 'text-muted hover:text-burgundy';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LANGUAGES.map(({ code, key }, i) => (
        <span key={code} className="flex items-center gap-2">
          <button
            onClick={() => switchLang(key)}
            aria-pressed={lang === key}
            className={`font-jost text-[12px] tracking-[0.15em] transition-colors duration-300 ${lang === key ? active : idle}`}
          >
            {code}
          </button>
          {i < LANGUAGES.length - 1 && (
            <span className={`text-[12px] ${light ? 'text-pearl/30' : 'text-stone'}`}>|</span>
          )}
        </span>
      ))}
    </div>
  );
}
