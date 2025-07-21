import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Typography, Divider, Stack, alpha, useTheme } from "@mui/material";
//constants
import { Svgs } from "@constants";
//components
import { Counter, Select, Accordion } from "@/components/commons";
//helpers
import { getMessageGuests } from "@helpers";
//styles
import { Container, IconButton } from "./room.styles";
//types
import type { RoomProps } from "./room.types";

const Room: FC<RoomProps> = (props) => {
  const {
    title,
    room,
    showDeleteButton = true,
    expanded,
    config,
    onClickDelete,
    onChangeAdults,
    onChangeChildren,
    onChangeChildValue,
    onChangeExpanded,
  } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  const portalContainer = (window as any)
    .__BOOKINI_WIDGET_PORTAL_CONTAINER__ as HTMLElement | undefined;

  const dataChilds = useMemo(
    () =>
      new Array(config?.maxAgesChildren || 16)
        .fill(0)
        .map((_, index) => index + 1),
    [config?.maxAgesChildren]
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
            {t("guests.pop_up_age_child", { value: iterator + 1 })}
          </Typography>
          <Select
            variant="standard"
            value={child.value}
            data={dataChilds}
            heightPaper={200}
            placeholder={t("guests.pop_up_age_child_placeholder")}
            getOptionLabel={(item) => item}
            getOptionValue={(item) => item}
            portalContainer={portalContainer}
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
  if (config?.mode === "accordion") {
    return (
      <Accordion
        expanded={expanded}
        sxSummary={{ background: alpha(theme.palette.primary.main, 0.1) }}
        onChange={onChangeExpanded}
        summary={
          <>
            <Typography flex={1} fontSize={14} fontWeight="600">
              {title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              divider={<Divider orientation="vertical" />}
            >
              <Typography fontSize={14} fontWeight="400" color="grey.600">
                {getMessageGuests({
                  t,
                  adults: room.adultsCount,
                  children: room.childCount,
                })}
              </Typography>
              {showDeleteButton && (
                <Stack onClick={onClickDelete}>
                  <Svgs.IconTrash sx={{ fontSize: 16, color: "grey.600" }} />
                </Stack>
              )}
            </Stack>
          </>
        }
        details={
          <Stack gap={1} divider={<Divider />}>
            <Stack gap={1}>
              <Counter
                min={1}
                direction="row"
                label={t("guests.pop_up_adults")}
                caption={t("guests.pop_up_adults_caption")}
                mode={config?.counterMode}
                max={config?.maxAdults}
                value={room.adultsCount}
                onChange={onChangeAdults}
              />
              <Counter
                direction="row"
                label={t("guests.pop_up_children")}
                caption={t("guests.pop_up_children_caption")}
                mode={config?.counterMode}
                max={config?.maxChildren}
                value={room.childCount}
                onChange={onChangeChildren}
              />
            </Stack>
            {room.childs.length > 0 && <Stack>{renderItem()}</Stack>}
          </Stack>
        }
      />
    );
  }
  return (
    <Container>
      <Stack direction="row" alignItems="center" height={36}>
        <Typography flex={1} fontSize={12} fontWeight="700">
          {title}
        </Typography>
        {showDeleteButton && (
          <IconButton size="small" onClick={onClickDelete}>
            <Svgs.IconTrash sx={{ fontSize: 16, color: "grey.600" }} />
          </IconButton>
        )}
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Counter
          min={1}
          label={t("guests.pop_up_adults")}
          caption={t("guests.pop_up_adults_caption")}
          mode={config?.counterMode}
          max={config?.maxAdults}
          value={room.adultsCount}
          onChange={onChangeAdults}
        />
        <Counter
          label={t("guests.pop_up_children")}
          caption={t("guests.pop_up_children_caption")}
          mode={config?.counterMode}
          max={config?.maxChildren}
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
