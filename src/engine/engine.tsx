import { useMemo, useState, type FC } from "react";
import { Stack, Typography } from "@mui/material";
import { CalendarRange } from "@components";
import { IBEProvider } from "@contextAPI";
import { initLocaleText } from "./engine.utils";
import type { DayProps, EngineProps } from "./engine.types";

const Engine: FC<EngineProps> = (props) => {
  const { engineId, size = "xl" } = props;

  const localeText = useMemo(() => initLocaleText(), []);

  const [startDate, setStartDate] = useState<DayProps | null>(null);
  const [endDate, setEndDate] = useState<DayProps | null>(null);

  const onClickDone = (params: {
    startDate: DayProps | null;
    endDate: DayProps | null;
  }) => {
    setStartDate(params.startDate);
    setEndDate(params.endDate);
  };

  return (
    <IBEProvider
      localeText={localeText}
      size={size}
      engineConfig={{
        calendar: { monthNumberDisplays: 1, maxYear: 1, popUpMode: "pop-up" },
      }}
    >
      <Stack p={2} borderRadius={2} boxShadow={2} gap={2}>
        <Typography>Engine ID: {engineId}</Typography>
        <CalendarRange
          // disabled={disabled}

          startDate={startDate}
          endDate={endDate}
          // locale={locale}
          onClickDone={onClickDone}
        />
      </Stack>
    </IBEProvider>
  );
};

export default Engine;
