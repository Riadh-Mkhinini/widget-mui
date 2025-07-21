import { useMemo, useState, type FC } from "react";
import { addDays } from "date-fns";
import { ThemeProvider } from "@mui/material";
//contextAPI
import { IBEProvider } from "@contextAPI";
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
  type PropertyItem,
  type RoomData,
} from "@components";
//utils
import { getLocale, isRtlLanguage } from "@helpers";
import { createCustomTheme } from "@theme";
import { generateDayProps, initConfigEngine } from "./engine.utils";
//types
import type {
  EngineConfig,
  EngineProps,
  ResultEngine,
  PropertyConfig,
  CalendarConfig,
  GuestsConfig,
} from "./engine.types";

const Engine: FC<EngineProps> = (props) => {
  const { language, config } = props;

  const [property, setProperty] = useState<PropertyItem | null>(null);
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

  //useMemo
  const theme = useMemo(
    () =>
      createCustomTheme({
        direction: isRtlLanguage(language) ? "rtl" : "ltr",
        palette: config?.colors,
      }),
    [config?.colors, language]
  );
  const locale = useMemo(() => getLocale(language), [language]);

  const engineConfig = useMemo(() => initConfigEngine(config), [config]);

  //functions
  const onChangeProperty = (item: PropertyItem) => {
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
        <Container>
          <Header title={engineConfig.global?.title?.label} />
          <Layout>
            <GridItem
              gridArea="property"
              isVisible={engineConfig.property?.showProperty}
            >
              <Property
                data={[
                  {
                    id: "8866",
                    name: "Hasdrubal Thalassa & Spa 1",
                    country: "tunisia",
                    city: "djerba",
                    image:
                      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
                  },
                  {
                    id: "8876",
                    name: "Hasdrubal Thalassa & Spa 5",
                    country: "tunisia",
                    city: "djerba",
                    image:
                      "https://thumbs.dreamstime.com/b/resort-night-12154190.jpg",
                  },
                  {
                    id: "5458",
                    name: "Hasdrubal Thalassa & Spa 2",
                    country: "tunisia",
                    city: "djerba",
                    image:
                      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/4068449.jpg?k=84bdc933cd43edf87f74bae774f5beb45544d4cc1ba303231da151454bab07c0&o=&hp=1",
                  },
                ]}
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
  generateDayProps,
};
export default Engine;
