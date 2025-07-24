import { useMemo, useState, type FC } from "react";
import { addDays } from "date-fns";
import { ThemeProvider } from "@mui/material";
//contextAPI
import { IBEProvider } from "@contextAPI";
//hooks
import { useFetch } from "@hooks";
//components
import {
  CalendarRange,
  Container,
  GridItem,
  Guests,
  Header,
  Layout,
  PromoCode,
  Property,
  Search,
  type DayProps,
  type PropertyShortData,
  type RoomData,
} from "@components";
//utils
import { getLocale, isRtlLanguage } from "@helpers";
import { createCustomTheme } from "@theme";
import {
  dataProperties,
  generateDayProps,
  initConfigEngine,
} from "./engine.utils";
//api
import { EngineServices, type PropertyEngineData } from "@api";
//types
import type {
  EngineConfig,
  EngineProps,
  ResultEngine,
  PropertyConfig,
  CalendarConfig,
  GuestsConfig,
  Palette,
} from "./engine.types";

const { getEngineById } = EngineServices;

const Engine: FC<EngineProps> = (props) => {
  const { language, config, idEngine, demo } = props;

  const [property, setProperty] = useState<PropertyShortData | null>(null);
  const [startDate, setStartDate] = useState<DayProps | null>(
    generateDayProps(new Date())
  );
  const [endDate, setEndDate] = useState<DayProps | null>(
    generateDayProps(addDays(new Date(), 1))
  );
  const [promoCode, setPromoCode] = useState<string>("");
  const [rooms, setRooms] = useState<Array<RoomData>>([
    { adultsCount: 2, childCount: 0, childs: [] },
  ]);

  const { data, loading, error } = useFetch<PropertyEngineData | null>(
    () => getEngineById({ idEngine: idEngine as string }),
    { skip: !idEngine || demo, deps: [idEngine] }
  );

  //useMemo
  const engineConfig = useMemo(
    () => initConfigEngine(data?.settings || config),
    [data?.settings, config]
  );

  const theme = useMemo(
    () =>
      createCustomTheme({
        direction: isRtlLanguage(language) ? "rtl" : "ltr",
        palette: engineConfig?.colors,
      }),
    [engineConfig?.colors, language]
  );
  const locale = useMemo(() => getLocale(language), [language]);

  //functions
  const onChangeProperty = (item: PropertyShortData) => {
    setProperty(item);
  };
  const onChangePromoCode = (value: string) => {
    setPromoCode(value);
  };
  const onClickDone = (params: {
    startDate: DayProps | null;
    endDate: DayProps | null;
  }) => {
    setStartDate(params.startDate);
    setEndDate(params.endDate);
  };
  const onChangeRooms = (value: Array<RoomData>) => {
    setRooms(value);
  };
  const onClickSearch = () => {
    const params: ResultEngine = { startDate, endDate, rooms };
    if (property) {
      params.property = property;
    }
    if (promoCode) {
      params.promoCode = promoCode;
    }
    props.onClickSearch?.(params);
  };
  //render
  return (
    <ThemeProvider theme={theme}>
      <IBEProvider size={engineConfig.size || "xl"} engineConfig={engineConfig}>
        <Container loading={loading} error={error}>
          <Header title={engineConfig.global?.title?.label} />
          <Layout>
            <GridItem
              gridArea="property"
              isVisible={engineConfig.property?.showProperty}
            >
              <Property
                data={dataProperties}
                value={property}
                onChange={onChangeProperty}
              />
            </GridItem>
            <GridItem gridArea="calendar">
              <CalendarRange
                startDate={startDate}
                endDate={endDate}
                locale={locale}
                onClickDone={onClickDone}
              />
            </GridItem>
            <GridItem gridArea="guests">
              <Guests rooms={rooms} onChange={onChangeRooms} />
            </GridItem>
            <GridItem
              gridArea="promoCode"
              isVisible={engineConfig.promoCode?.showPromoCode}
            >
              <PromoCode value={promoCode} onChangeValue={onChangePromoCode} />
            </GridItem>
            <Search sx={{ gridArea: "search" }} onClick={onClickSearch} />
          </Layout>
        </Container>
      </IBEProvider>
    </ThemeProvider>
  );
};

export {
  type EngineConfig,
  type PropertyConfig,
  type CalendarConfig,
  type GuestsConfig,
  type Palette,
  generateDayProps,
};
export default Engine;
