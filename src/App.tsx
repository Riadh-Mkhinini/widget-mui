import { useEffect, useMemo } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import i18next from "i18next";
import "@fontsource-variable/inter-tight/wght.css";
import "./i18n";

//components
import Engine from "./engine/engine";
//helpers
import { isRtlLanguage } from "@helpers";

function App() {
  const language = "enUS";
  const isRtl = useMemo(() => isRtlLanguage(language), [language]);

  useEffect(() => {
    i18next.changeLanguage(language);
    document.body.dir = isRtl ? "rtl" : "ltr";
  }, [isRtl, language]);

  const cache = useMemo(
    () =>
      createCache({
        key: "engine-widget",
        stylisPlugins: isRtl ? [stylisRTLPlugin] : undefined,
      }),
    [isRtl]
  );
  //BE-250724-33450622 single
  //BE-250724-33520148 multi
  return (
    <CacheProvider value={cache}>
      <Engine idEngine="BE-250724-33450622" demo language={language} />
    </CacheProvider>
  );
}

export default App;
