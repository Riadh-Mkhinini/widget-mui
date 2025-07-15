import { useMemo, type FC } from "react";
import { Stack, Typography } from "@mui/material";
import { CalendarRange } from "@components";
import { FormProvider, useForm } from "react-hook-form";
import type { EngineState } from "./engine.types";
import { IBEProvider } from "@contextAPI";
import { initLocaleText } from "./engine.utils";

export interface WidgetProps {
  engineId: string;
}

const Widget: FC<WidgetProps> = (props) => {
  const { engineId } = props;
  const methods = useForm<EngineState>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      property: null,
      startDate: null,
      endDate: null,
      rooms: [{ adultsCount: 1, childs: [], childCount: 0 }],
      guestsResult: { rooms: 1, adults: 1, childs: 0 },
      promoCode: "",
      searchProperty: "",
    },
  });
  const localeText = useMemo(() => initLocaleText(), []);

  return (
    <FormProvider {...methods}>
      <IBEProvider
        localeText={localeText}
        size="xl"
        engineConfig={{ calendar: { monthNumberDisplays: 1 } }}
      >
        <Stack p={2} borderRadius={2} boxShadow={2} gap={2}>
          <Typography>Engine ID: {engineId}</Typography>
          <CalendarRange
          // disabled={disabled}
          // disabledWithoutColor={disabledWithoutColor}
          // defaultStartDate={defaultState?.propertyState?.startDate}
          // defaultEndDate={defaultState?.propertyState?.endDate}
          // locale={locale}
          />
        </Stack>
      </IBEProvider>
    </FormProvider>
  );
};

export default Widget;
