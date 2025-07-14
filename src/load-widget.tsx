import ReactDOM from "react-dom/client";
import Widget from "./widget/widget";

function mountWidget(config: { engineId: string }) {
  const container = document.getElementById("bookini-ibe-widget");

  if (!container)
    return console.error("bookini-ibe-widget container not found");

  // Use Shadow DOM to isolate styles
  const shadow = container.attachShadow({ mode: "open" });
  const mountPoint = document.createElement("div");
  shadow.appendChild(mountPoint);

  // Optional: inject MUI fonts (Roboto)
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
  link.rel = "stylesheet";
  shadow.appendChild(link);

  const root = ReactDOM.createRoot(mountPoint);
  root.render(<Widget engineId={config.engineId} />);
}

// Auto-run when script is loaded
const scriptTag = document.currentScript as HTMLScriptElement;
const engineId = scriptTag?.getAttribute("data-id") || "Unknown";

mountWidget({ engineId });
