// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.process = { env: { NODE_ENV: "production" } };

import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Engine from "./engine/engine";

function initEngine(containerId: string, engineId: string) {
  const container = document.getElementById(containerId);
  if (!container || container.shadowRoot) return;

  // ✅ Create Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });

  // ✅ Create a container element for MUI portals (Popover, Dialog, etc.)
  const portalContainer = document.createElement("div");

  // ✅ Create the root mount node for React inside portalContainer
  const mountNode = document.createElement("div");
  portalContainer.appendChild(mountNode);

  // ✅ Append both to shadow DOM
  shadowRoot.appendChild(portalContainer);

  // ✅ Inject fonts
  const fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&family=Noto+Kufi+Arabic:wght@400;500;600;700";
  fontLink.rel = "stylesheet";
  shadowRoot.appendChild(fontLink);

  // ✅ Create Emotion cache in Shadow DOM
  const emotionCache = createCache({
    key: "engine-widget",
    container: shadowRoot,
  });

  // ✅ Expose containers globally for Popover/Dialog use
  (window as any).__BOOKINI_WIDGET_SHADOW__ = shadowRoot;
  (window as any).__BOOKINI_WIDGET_PORTAL_CONTAINER__ = portalContainer;

  // ✅ Mount React
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <CacheProvider value={emotionCache}>
      <Engine engineId={engineId} />
    </CacheProvider>
  );
}

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

// Expose the init method for script-based loading
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.BookiniWidget = {
  initEngine: initEngine,
};
