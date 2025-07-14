// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
window.process = { env: { NODE_ENV: "production" } };

import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Widget from "./widget/widget";

// Optional: use ThemeProvider if needed
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function mountWidget(config: { engineId: string }) {
  const container = document.getElementById("bookini-ibe-widget");
  if (!container) return;

  // Attach Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });
  const mountNode = document.createElement("div");
  shadowRoot.appendChild(mountNode);

  // Inject Roboto (MUI default font)
  const fontLink = document.createElement("link");
  fontLink.href =
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
  fontLink.rel = "stylesheet";
  shadowRoot.appendChild(fontLink);

  // Emotion cache that targets the shadow root
  const emotionCache = createCache({
    key: "mui-widget",
    container: shadowRoot,
  });

  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Widget engineId={config.engineId} />
      </ThemeProvider>
    </CacheProvider>
  );
}

// Auto-mount when script loads
const scripts = document.querySelectorAll(
  "script[type='module'][src*='load-widget']"
);
let engineId = "UNKNOWN";

scripts.forEach((script) => {
  if (script instanceof HTMLScriptElement && script.hasAttribute("data-id")) {
    engineId = script.getAttribute("data-id")!;
  }
});

mountWidget({ engineId });
