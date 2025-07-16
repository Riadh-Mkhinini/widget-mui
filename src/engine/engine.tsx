import { useMemo, useState, type FC } from "react";
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
import { createCustomTheme } from "@theme";
import { initLocaleText } from "./engine.utils";
//types
import type { EngineConfig, EngineProps, ResultEngine } from "./engine.types";

const Engine: FC<EngineProps> = (props) => {
  const { idEngine } = props;

  const localeText = useMemo(() => initLocaleText(), []);

  const [property, setProperty] = useState<PropertyItem | null>(null);
  const [startDate, setStartDate] = useState<DayProps | null>(null);
  const [endDate, setEndDate] = useState<DayProps | null>(null);
  const [promoCode, setPromoCode] = useState<string>("");
  const [rooms, setRooms] = useState<Array<RoomData>>([
    { adultsCount: 2, childCount: 0, childs: [] },
  ]);

  //useMemo
  const theme = useMemo(() => createCustomTheme(), []);

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
  const engineConfig: EngineConfig = {
    global: {
      layout: "combined",
      preview: {
        showIcon: true,
        radius: 1,
        // background: "",
        borderWidth: 2,
        // isRounded: true,
        // border: "green",
        // size: "large",
        // label: "blue",
        // value: "red",
        // placeholder: "black",
        // icon: "black",
        formatDate: "dd-MM-yyyy",
        showShadow: true,
      },
      container: {
        padding: 1,
        // background: "#00000010",
        borderRadius: 1,
      },
      title: {
        fontSize: 26,
        textAlign: "center",
      },
    },
    calendar: {
      monthNumberDisplays: 1,
      maxYear: 1,
      popUpMode: "default",
    },
    property: {
      mode: "simple",
      popUpMode: "default",
      showSearch: true,
      showProperty: false,
    },
    promoCode: {
      showPromoCode: false,
    },
    guests: {
      mode: "accordion",
      popUpMode: "default",
      counterMode: "circular",
      maxAdults: 6,
      maxChildren: 8,
      maxAgesChildren: 10,
      maxRoom: 2,
    },
    search: {
      mode: "button",
      showIcon: true,
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <IBEProvider
        localeText={localeText}
        size="xl"
        engineConfig={engineConfig}
      >
        <Container>
          <Header title={`Engine ID: ${idEngine}`} />
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
                // locale={locale}
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

export default Engine;
