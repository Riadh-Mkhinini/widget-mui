import { type FC, useMemo } from "react";
import { Typography, Fade, Divider, Stack } from "@mui/material";
//constants
import { Svgs } from "@constants";
//context
import { useIBE } from "@contextAPI";
//components
import { Counter, Select } from "@/components/commons";
//styles
import {
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "./room.styles";
//types
import type { RoomProps } from "./room.types";

const Room: FC<RoomProps> = (props) => {
  const {
    title,
    room,
    showDeleteButton = true,
    onClickDelete,
    onChangeAdults,
    onChangeChildren,
    onChangeChildValue,
  } = props;
  const { localeText, engineConfig } = useIBE();

  const dataChilds = useMemo(
    () =>
      new Array(engineConfig?.guests?.maxAgesChildren || 16)
        .fill(0)
        .map((_, index) => index + 1),
    [engineConfig?.guests?.maxAgesChildren]
  );

  const onChange = (indexChild: number) => (event: any) => {
    const value = Number(event.target.value);
    onChangeChildValue?.(value, indexChild);
  };
  //render
  const renderItem = () => {
    return room.childs.map((child, iterator) => {
      return (
        <Stack key={iterator} direction="row" gap={2}>
          <Typography flex={1} fontSize={14} mt={1}>
            {localeText?.guests?.popUpAgeChild?.(iterator + 1)}
          </Typography>
          <Select
            variant="standard"
            value={child.value}
            data={dataChilds}
            heightPaper={200}
            placeholder={localeText?.guests?.popUpAgeChildPlaceholder}
            getOptionLabel={(item) => item}
            getOptionValue={(item) => item}
            sx={{ textAlign: "end" }}
            sxPlaceholder={{ textAlign: "end" }}
            IconComponent={Svgs.IconChevronDown}
            error={!!child.error}
            helperText={child.error}
            onChange={onChange(iterator)}
          />
        </Stack>
      );
    });
  };
  if (engineConfig?.guests?.mode === "accordion") {
    return (
      <Accordion defaultExpanded disableGutters variant="outlined">
        <AccordionSummary aria-controls="room-guests" id="room-guests-header">
          <Typography flex={1} fontSize={14} fontWeight="600">
            {title}
          </Typography>
          <Typography fontSize={14} fontWeight="400" color="grey.600">
            {localeText?.guests?.popUpCountAdultChild &&
              localeText?.guests?.popUpCountAdultChild(
                room.adultsCount,
                room.childCount
              )}
          </Typography>
          <Fade in={showDeleteButton} unmountOnExit mountOnEnter>
            <Stack direction="row" alignItems="center">
              <Divider
                orientation="vertical"
                sx={{ height: 22, ml: 1, mr: 1 }}
              />
              <Stack onClick={onClickDelete}>
                <Svgs.IconTrash sx={{ fontSize: 16, color: "grey.600" }} />
              </Stack>
            </Stack>
          </Fade>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap={1}>
            <Counter
              min={1}
              direction="row"
              mode={engineConfig?.guests?.counterMode}
              max={engineConfig?.guests?.maxAdults}
              label={localeText?.guests?.popUpAdults}
              caption={localeText?.guests?.popUpAdultsCaption}
              value={room.adultsCount}
              onChange={onChangeAdults}
            />
            <Counter
              direction="row"
              mode={engineConfig?.guests?.counterMode}
              max={engineConfig?.guests?.maxChildren}
              label={localeText?.guests?.popUpChildren}
              caption={localeText?.guests?.popUpChildrenCaption}
              value={room.childCount}
              onChange={onChangeChildren}
            />
          </Stack>
          {room.childs.length > 0 && <Divider />}
          <Stack>{renderItem()}</Stack>
        </AccordionDetails>
      </Accordion>
    );
  }
  return (
    <Container>
      <Stack direction="row" alignItems="center" height={36}>
        <Typography flex={1} fontSize={12} fontWeight="700">
          {title}
        </Typography>
        <Fade in={showDeleteButton} unmountOnExit mountOnEnter>
          <IconButton size="small" onClick={onClickDelete}>
            <Svgs.IconTrash sx={{ fontSize: 16, color: "grey.600" }} />
          </IconButton>
        </Fade>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Counter
          min={1}
          mode={engineConfig?.guests?.counterMode}
          max={engineConfig?.guests?.maxAdults}
          label={localeText?.guests?.popUpAdults}
          caption={localeText?.guests?.popUpAdultsCaption}
          value={room.adultsCount}
          onChange={onChangeAdults}
        />
        <Counter
          mode={engineConfig?.guests?.counterMode}
          max={engineConfig?.guests?.maxChildren}
          label={localeText?.guests?.popUpChildren}
          caption={localeText?.guests?.popUpChildrenCaption}
          value={room.childCount}
          onChange={onChangeChildren}
        />
      </Stack>
      <Stack mt={1} gap={1}>
        {renderItem()}
      </Stack>
    </Container>
  );
};

export default Room;
