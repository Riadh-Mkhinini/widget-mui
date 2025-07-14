// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
window.process = { env: { NODE_ENV: "production" } };

import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Widget from "./widget/widget";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function initWidget() {
  const engineId = (() => {
    const scripts = document.querySelectorAll(
      "script[type='module'][src*='load-widget']"
    );
    for (const script of scripts) {
      if (
        script instanceof HTMLScriptElement &&
        script.hasAttribute("data-id")
      ) {
        return script.getAttribute("data-id")!;
      }
    }
    return "UNKNOWN";
  })();

  const tryMount = () => {
    const container = document.getElementById("bookini-ibe-widget");
    if (container && !container.shadowRoot) {
      mountInto(container, engineId);
    }
  };

  // Check if it's already there
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    tryMount();
  }

  // Watch for DOM additions
  const observer = new MutationObserver(() => tryMount());
  observer.observe(document.body, { childList: true, subtree: true });

  // Also poll as fallback
  const interval = setInterval(() => {
    tryMount();
    if (document.getElementById("bookini-ibe-widget")?.shadowRoot) {
      clearInterval(interval);
      observer.disconnect();
    }
  }, 100);
}

function mountInto(container: HTMLElement, engineId: string) {
  const shadowRoot = container.attachShadow({ mode: "open" });
  const mountNode = document.createElement("div");
  shadowRoot.appendChild(mountNode);

  const fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&family=Noto+Kufi+Arabic:wght@400;500;600;700";
  fontLink.rel = "stylesheet";
  shadowRoot.appendChild(fontLink);

  const emotionCache = createCache({
    key: "engine-widget",
    container: shadowRoot,
  });

  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Widget engineId={engineId} />
      </ThemeProvider>
    </CacheProvider>
  );
}

initWidget();
