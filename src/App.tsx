import { useMemo } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import Engine from "./engine/engine";

// Create rtl cache
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [stylisRTLPlugin],
});

// Create ltr cache
export const cacheLtr = createCache({ key: "muiltr" });

function App() {
  const language = "ar";
  const cache = useMemo(
    () => (language === "ar" ? cacheRtl : cacheLtr),
    [language]
  );
  return (
    <CacheProvider value={cache}>
      <Engine idEngine="ENGINE-564654" language={language} />
    </CacheProvider>
  );
}

export default App;
