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

function initWidget(containerId: string, engineId = "UNKNOWN") {
  const container = document.getElementById(containerId);
  if (!container || container.shadowRoot) return;

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

const container = document.getElementById("bookini-ibe-widget");
if (container) {
  const scripts = document.querySelectorAll(
    "script[type='module'][src*='load-widget']"
  );
  let engineId = "UNKNOWN";

  scripts.forEach((script) => {
    if (script instanceof HTMLScriptElement && script.hasAttribute("data-id")) {
      engineId = script.getAttribute("data-id")!;
    }
  });

  initWidget("bookini-ibe-widget", engineId);
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.BookiniWidget = {
  mount: initWidget,
};
