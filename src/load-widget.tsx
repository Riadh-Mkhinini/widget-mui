// @ts-expect-error
window.process = { env: { NODE_ENV: "production" } };
import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { addDays, format } from "date-fns";
import stylisRTLPlugin from "stylis-plugin-rtl";
import i18n from "i18next";
import { ThemeProvider } from "@mui/material";
import "./i18n";
import {
  getDayOfWeek,
  getLocale,
  getTotalOfDays,
  isRtlLanguage,
  type Language,
} from "@helpers";
import Engine, {
  generateDayProps,
  type EngineConfig,
  type CalendarConfig,
  type GuestsConfig,
  type PropertyConfig,
  type Palette,
} from "./engine/engine";
import {
  Calendar,
  ContentProperty,
  GuestsRooms,
  type PropertyShortData,
} from "@components";
import { createCustomTheme } from "@theme";
import { dataProperties } from "./engine/engine.utils";

type InitEngineParams = {
  idEngine?: string;
  language?: Language;
  onClickSearch?: (values: any) => void;
};

async function initEngine(containerId: string, params: InitEngineParams) {
  const { idEngine, language, onClickSearch } = params;
  const container = document.getElementById(containerId);
  if (!container || container.shadowRoot) return;

  const isRtl = isRtlLanguage(language);
  const direction = isRtl ? "rtl" : "ltr";

  // ✅ Set direction for layout
  container.setAttribute("dir", direction);

  // ✅ Initialize i18n language
  try {
    const langToUse =
      language && i18n.hasResourceBundle(language, "translation")
        ? language
        : "enUS";
    await i18n.changeLanguage(langToUse);
  } catch (error) {
    console.warn(error);
  }

  // ✅ Create Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });

  // ✅ Create a container element for MUI portals (Popover, Dialog, etc.)
  const portalContainer = document.createElement("div");

  // ✅ Create the root mount node for React inside portalContainer
  const mountNode = document.createElement("div");

  // ✅ Set direction for layout
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

type InitDemoEngineParams = {
  idEngine?: string;
  language?: Language;
  config?: EngineConfig;
  onClickSearch?: (values: any) => void;
};

async function initDemoEngine(
  containerId: string,
  params: InitDemoEngineParams
) {
  const { idEngine, language, config, onClickSearch } = params;
  const container = document.getElementById(containerId);
  if (!container || container.shadowRoot) return;

  const isRtl = isRtlLanguage(language);
  const direction = isRtl ? "rtl" : "ltr";

  // ✅ Set direction for layout
  container.setAttribute("dir", direction);

  // ✅ Initialize i18n language
  try {
    const langToUse =
      language && i18n.hasResourceBundle(language, "translation")
        ? language
        : "enUS";
    await i18n.changeLanguage(langToUse);
  } catch (error) {
    console.warn(error);
  }

  // ✅ Create Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });

  // ✅ Create a container element for MUI portals (Popover, Dialog, etc.)
  const portalContainer = document.createElement("div");

  // ✅ Create the root mount node for React inside portalContainer
  const mountNode = document.createElement("div");

  // ✅ Set direction for layout
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
        demo
        idEngine={idEngine}
        language={language}
        config={config}
        onClickSearch={onClickSearch}
      />
    </CacheProvider>
  );
}
type InitCalendarParams = {
  language?: Language;
  config?: Omit<CalendarConfig, "popUpMode">;
  colors?: Palette;
};

async function initCalendar(containerId: string, params: InitCalendarParams) {
  const { language, config, colors } = params;
  const container = document.getElementById(containerId);
  if (!container || container.shadowRoot) return;

  const isRtl = isRtlLanguage(language);
  const direction = isRtl ? "rtl" : "ltr";

  // ✅ Set direction for layout
  container.setAttribute("dir", direction);

  // ✅ Initialize i18n language
  try {
    const langToUse =
      language && i18n.hasResourceBundle(language, "translation")
        ? language
        : "enUS";
    await i18n.changeLanguage(langToUse);
  } catch (error) {
    console.warn(error);
  }

  // ✅ Create Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });

  // ✅ Create mount node directly inside shadow root
  const mountNode = document.createElement("div");
  mountNode.setAttribute("dir", direction);
  shadowRoot.appendChild(mountNode); // ✅ No portal container needed

  // ✅ Create Emotion cache in Shadow DOM
  const emotionCache = createCache({
    key: "calendar-widget", // 🆕 Use a distinct key
    container: shadowRoot,
    stylisPlugins: isRtl ? [stylisRTLPlugin] : undefined,
  });

  // ✅ Mount React component
  const root = ReactDOM.createRoot(mountNode);
  const locale = getLocale(language);
  const theme = createCustomTheme({
    direction: direction,
    palette: colors,
  });
  root.render(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Calendar
          disablePortal
          defaultStartDate={generateDayProps(new Date())}
          defaultEndDate={generateDayProps(addDays(new Date(), 1))}
          daysList={getDayOfWeek(locale)}
          locale={locale}
          calendarConfig={config}
          texts={{
            popUpButtonDone: "Confirm",
            popUpNote: "The best booking prices for 1 person per night",
            popUpSubNote: "Prices are subject to special booking conditions",
            popUpStartEndDateNights: (start, end) =>
              `${format(start, "EEEEEE, dd MMM", { locale })} - ${format(
                end,
                "EEEEEE, dd MMM",
                { locale }
              )} (${getTotalOfDays(start, end)} nights)`,
          }}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

type InitGuestsParams = {
  language?: Language;
  config?: Omit<GuestsConfig, "popUpMode">;
  colors?: Palette;
};
async function initGuests(containerId: string, params: InitGuestsParams) {
  const { language, config, colors } = params;
  const container = document.getElementById(containerId);

  if (!container || container.shadowRoot) return;

  const isRtl = isRtlLanguage(language);
  const direction = isRtl ? "rtl" : "ltr";

  // ✅ Set direction for layout
  container.setAttribute("dir", direction);

  // ✅ Initialize i18n language
  try {
    const langToUse =
      language && i18n.hasResourceBundle(language, "translation")
        ? language
        : "enUS";
    await i18n.changeLanguage(langToUse);
  } catch (error) {
    console.warn(error);
  }

  // ✅ Create Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });

  // ✅ Create mount node directly inside shadow root
  const mountNode = document.createElement("div");
  mountNode.setAttribute("dir", direction);
  shadowRoot.appendChild(mountNode); // ✅ No portal container needed

  // ✅ Create Emotion cache in Shadow DOM
  const emotionCache = createCache({
    key: "calendar-guest", // 🆕 Use a distinct key
    container: shadowRoot,
    stylisPlugins: isRtl ? [stylisRTLPlugin] : undefined,
  });

  // ✅ Mount React component
  const root = ReactDOM.createRoot(mountNode);
  const theme = createCustomTheme({
    direction: direction,
    palette: colors,
  });
  root.render(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <GuestsRooms
          rooms={[{ adultsCount: 2, childCount: 0, childs: [] }]}
          config={config}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

type InitPropertyParams = {
  language?: Language;
  config?: Omit<PropertyConfig, "popUpMode" | "showProperty">;
  colors?: Palette;
  data?: Array<PropertyShortData>;
};
async function initProperty(containerId: string, params: InitPropertyParams) {
  const { language, config, colors, data } = params;
  const container = document.getElementById(containerId);
  if (!container || container.shadowRoot) return;

  const isRtl = isRtlLanguage(language);
  const direction = isRtl ? "rtl" : "ltr";

  // ✅ Set direction for layout
  container.setAttribute("dir", direction);

  // ✅ Initialize i18n language
  try {
    const langToUse =
      language && i18n.hasResourceBundle(language, "translation")
        ? language
        : "enUS";
    await i18n.changeLanguage(langToUse);
  } catch (error) {
    console.warn(error);
  }

  // ✅ Create Shadow DOM
  const shadowRoot = container.attachShadow({ mode: "open" });

  // ✅ Create mount node directly inside shadow root
  const mountNode = document.createElement("div");
  mountNode.setAttribute("dir", direction);
  shadowRoot.appendChild(mountNode); // ✅ No portal container needed

  // ✅ Create Emotion cache in Shadow DOM
  const emotionCache = createCache({
    key: "calendar-property", // 🆕 Use a distinct key
    container: shadowRoot,
    stylisPlugins: isRtl ? [stylisRTLPlugin] : undefined,
  });

  // ✅ Mount React component
  const root = ReactDOM.createRoot(mountNode);
  const theme = createCustomTheme({
    direction: direction,
    palette: colors,
  });
  root.render(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <ContentProperty data={data || dataProperties} config={config} />
      </ThemeProvider>
    </CacheProvider>
  );
}

// Expose the init method for script-based loading
declare global {
  export interface Window {
    BookiniWidget?: {
      initEngine: typeof initEngine;
      initDemoEngine: typeof initDemoEngine;
      initCalendar: typeof initCalendar;
      initGuests: typeof initGuests;
      initProperty: typeof initProperty;
    };
    __BOOKINI_WIDGET_SHADOW__?: ShadowRoot;
    __BOOKINI_WIDGET_PORTAL_CONTAINER__?: HTMLDivElement;
  }
}
window.BookiniWidget = {
  initEngine: initEngine,
  initDemoEngine: initDemoEngine,
  initCalendar: initCalendar,
  initGuests: initGuests,
  initProperty: initProperty,
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
