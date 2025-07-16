// @ts-expect-error
window.process = { env: { NODE_ENV: "production" } };
import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Engine from "./engine/engine";

type Params = {
  idEngine: string;
};

function initEngine(containerId: string, params: Params) {
  const { idEngine } = params;
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
    "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
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
      <Engine idEngine={idEngine} />
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
