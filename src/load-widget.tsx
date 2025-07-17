// @ts-expect-error
window.process = { env: { NODE_ENV: "production" } };
import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Engine from "./engine/engine";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { isRtlLanguage, type Language } from "@helpers";

type Params = {
  idEngine: string;
  language?: Language;
  onClickSearch?: (values: any) => void;
};

function initEngine(containerId: string, params: Params) {
  const { idEngine, language, onClickSearch } = params;
  const container = document.getElementById(containerId);
  if (!container || container.shadowRoot) return;

  const isRtl = isRtlLanguage(language);
  const direction = isRtl ? "rtl" : "ltr";

  container.setAttribute("dir", direction);

  // ✅ Create Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });

  // ✅ Create a container element for MUI portals (Popover, Dialog, etc.)
  const portalContainer = document.createElement("div");

  // ✅ Create the root mount node for React inside portalContainer
  const mountNode = document.createElement("div");

  mountNode.setAttribute("dir", direction);

  portalContainer.appendChild(mountNode);

  // ✅ Append both to shadow DOM
  shadowRoot.appendChild(portalContainer);

  // ✅ Create Emotion cache in Shadow DOM
  const emotionCache = createCache({
    key: "engine-widget",
    container: shadowRoot,
    stylisPlugins: isRtl ? [stylisRTLPlugin] : undefined,
  });

  // ✅ Expose containers globally for Popover/Dialog use
  (window as any).__BOOKINI_WIDGET_SHADOW__ = shadowRoot;
  (window as any).__BOOKINI_WIDGET_PORTAL_CONTAINER__ = portalContainer;

  // ✅ Mount React
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <CacheProvider value={emotionCache}>
      <Engine
        idEngine={idEngine}
        language={language}
        onClickSearch={onClickSearch}
      />
    </CacheProvider>
  );
}

// Expose the init method for script-based loading
// @ts-ignore
window.BookiniWidget = {
  initEngine: initEngine,
};

// Optional auto-init block if you want script to self-start (commented out)
// const container = document.getElementById("bookini-ibe-widget");
// if (container) {
//   const scripts = document.querySelectorAll(
//     "script[type='module'][src*='load-widget']"
//   );
//   let idEngine = "UNKNOWN";
//   scripts.forEach((script) => {
//     if (script instanceof HTMLScriptElement && script.hasAttribute("data-id")) {
//       idEngine = script.getAttribute("data-id")!;
//     }
//   });
//   initEngine("bookini-ibe-widget", idEngine);
// }
