import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const modules = import.meta.glob("./translations/*.json", { eager: true });

const resources: any = {};
for (const path in modules) {
  const lang = path.match(/\/([a-z-]+)\.json$/i)?.[1];
  if (lang) {
    resources[lang] = { translation: (modules[path] as any).default };
  }
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
