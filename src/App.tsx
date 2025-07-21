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
  return (
    <CacheProvider value={cache}>
      <Engine
        idEngine="ENGINE-564654"
        language={language}
        config={{
          colors: {
            primary: {
              main: "#97BA68",
              light: "#6B9C27",
              dark: "#3C6E0E",
              contrastText: "#000",
            },
            secondary: {
              main: "#CFE2AF",
              light: "#BAD68D",
              dark: "#94BC5D",
              contrastText: "#000",
            },
          },
        }}
      />
    </CacheProvider>
  );
}

export default App;
