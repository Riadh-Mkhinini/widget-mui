// @ts-expect-error
window.process = { env: { NODE_ENV: "production" } };
import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { format } from "date-fns";
import stylisRTLPlugin from "stylis-plugin-rtl";
import i18n from "i18next";
import {
  getDayOfWeek,
  getLocale,
  getTotalOfDays,
  isRtlLanguage,
  type Language,
} from "@helpers";
import "./i18n";
import Engine from "./engine/engine";
import { Calendar } from "./components/calendarRange/calendar/calendar";
import { generateDayProps } from "./engine/engine.utils";
import type { CalendarConfig } from "./engine/engine.types";

type InitEngineParams = {
  idEngine: string;
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

type InitModalCalendarParams = {
  language?: Language;
  config?: CalendarConfig;
};

async function initModalCalendar(
  containerId: string,
  params: InitModalCalendarParams
) {
  const { language, config } = params;
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
  const locale = getLocale(language);
  root.render(
    <CacheProvider value={emotionCache}>
      <Calendar
        open
        defaultStartDate={generateDayProps(new Date())}
        defaultEndDate={generateDayProps(new Date())}
        daysList={getDayOfWeek(locale)}
        locale={locale}
        calendarConfig={config}
        texts={{
          popUpButtonDone: "Confirm",
          popUpNote: "The best booking prices for 1 person per night",
          popUpSubNote: "Prices are subject to special booking conditions",
          popUpStartEndDateNights: (start, end) =>
            `${format(start, "EEEEEE, dd MMM")} - ${format(
              end,
              "EEEEEE, dd MMM"
            )} (${getTotalOfDays(start, end)} nights)`,
        }}
      />
    </CacheProvider>
  );
}
// Expose the init method for script-based loading
declare global {
  interface Window {
    BookiniWidget?: {
      initEngine: typeof initEngine;
      initModalCalendar: typeof initModalCalendar;
    };
    __BOOKINI_WIDGET_SHADOW__?: ShadowRoot;
    __BOOKINI_WIDGET_PORTAL_CONTAINER__?: HTMLDivElement;
  }
}
window.BookiniWidget = {
  initEngine: initEngine,
  initModalCalendar: initModalCalendar,
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
