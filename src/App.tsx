import { useEffect, useMemo } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import "@fontsource-variable/inter-tight/wght.css";

//components
import Engine from "./engine/engine";
//helpers
import { isRtlLanguage } from "@helpers";

function App() {
  const language = "ar";
  const isRtl = useMemo(() => isRtlLanguage(language), [language]);

  useEffect(() => {
    document.body.dir = isRtl ? "rtl" : "ltr";
  }, [isRtl]);

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
      <Engine idEngine="ENGINE-564654" language={language} />
    </CacheProvider>
  );
}

export default App;
