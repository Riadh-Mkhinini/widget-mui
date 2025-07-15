import { type FC, useMemo } from "react";
import { InputAdornment, Typography, useTheme } from "@mui/material";
import { format } from "date-fns";
//svgs
import { Svgs } from "@constants";
//contextAPI
import { useIBE } from "@contextAPI";
import { Input } from "../../input/input";
//utils
import { getTotalOfDays } from "../preview.utils";
//styles
import { Row, Column, ContainerIcon, Badge } from "./content.styles";
//types
import type { PreviewProps } from "../preview.types";
import type { DayProps } from "@/widget/widget.types";

const Content: FC<PreviewProps> = (props) => {
  const { open, disabled, icon, showIconSelect = true, sizes } = props;

  const theme = useTheme();
  const { engineConfig, paramsSize, size } = useIBE();

  const params = useMemo(() => sizes || paramsSize, [sizes, paramsSize]);
  const text = useMemo(
    () => (props.type === "simple" ? props.value || props.placeholder : ""),
    [props]
  );

  const color = useMemo(() => {
    if (disabled) return engineConfig?.global?.preview?.disabled || "grey.500";
    if (
      (props.type === "simple" && props.value) ||
      (props.type === "rangeDate" && (props.startDate || props.endDate))
    )
      return engineConfig?.global?.preview?.value || "grey.900";
    return engineConfig?.global?.preview?.placeholder || "grey.500";
  }, [disabled, engineConfig?.global?.preview, props]);

  const formatDate = useMemo(
    () => `${engineConfig?.global?.preview?.formatDate || "yyyy-MM-dd"}`,
    [engineConfig?.global?.preview?.formatDate]
  );

  const renderDate = (params: {
    date?: DayProps | null;
    textAlign: "start" | "end";
  }) => {
    const { date, textAlign } = params;

    if (date) {
      return (
        <Typography
          textAlign={textAlign}
          fontSize={paramsSize.fontSizeValue}
          fontWeight="500"
          color={color}
          noWrap
        >
          {format(date.date, formatDate)}
        </Typography>
      );
    }
    return (
      <Typography
        textAlign={textAlign}
        fontSize={paramsSize.fontSizeValue}
        fontWeight="400"
        color={engineConfig?.global?.preview?.placeholder || "grey.500"}
        noWrap
      >
        {formatDate.toUpperCase()}
      </Typography>
    );
  };

  if (props.type === "input") {
    return (
      <Input
        name={props.name}
        fullWidth
        placeholder={props.placeholder}
        sxContainer={{ width: "100%" }}
        startAdornment={
          engineConfig?.global?.preview?.showIcon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          )
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            fontSize: params.fontSizeValue,
            color: engineConfig?.global?.preview?.value || "grey.700",
            padding: 0,
            "& fieldset": { border: "none" },
          },
        }}
      />
    );
  } else if (props.type === "simple") {
    return (
      <Row>
        {engineConfig?.global?.preview?.showIcon && icon}
        <Column>
          {props.label && (
            <Typography
              textAlign="start"
              fontSize={params.fontSizeLabel}
              color={engineConfig?.global?.preview?.label || "grey.700"}
              noWrap
            >
              {props.label}
            </Typography>
          )}
          {text && (
            <Typography
              textAlign="start"
              fontSize={params.fontSizeValue}
              fontWeight="500"
              color={color}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                maxWidth: 180,
              }}
            >
              {text}
            </Typography>
          )}
        </Column>
        {showIconSelect && (
          <ContainerIcon open={open}>
            <Svgs.ChevronDownIcon
              width={params.sizeIcon}
              height={params.sizeIcon}
              stroke={
                engineConfig?.global?.preview?.placeholder ||
                theme.palette.grey[500]
              }
            />
          </ContainerIcon>
        )}
      </Row>
    );
  } else if (props.type === "button") {
    return (
      <Row>
        {icon ? (
          icon
        ) : (
          <Svgs.PlusIcon
            width={params.sizeIcon}
            height={params.sizeIcon}
            stroke={
              props.textButtonColor ||
              engineConfig?.global?.preview?.icon ||
              theme.palette.grey[600]
            }
          />
        )}

        <Column minHeight={39} justifyContent="center">
          <Typography
            textAlign="start"
            fontSize={params.fontSizeButton}
            fontWeight="500"
            maxWidth={200}
            color={
              props.textButtonColor ||
              engineConfig?.global?.preview?.value ||
              "grey.600"
            }
            noWrap
          >
            {props.textButton}
          </Typography>
        </Column>
        {props.right}
      </Row>
    );
  } else if (props.type === "rangeDate") {
    const totalOfDays = getTotalOfDays(
      props.startDate?.date,
      props.endDate?.date
    );

    return (
      <>
        <Column>
          <Row>
            {engineConfig?.global?.preview?.showIcon && (
              <Svgs.CalendarIcon
                width={paramsSize.sizeIcon}
                height={paramsSize.sizeIcon}
                fill={
                  engineConfig?.global?.preview?.icon || theme.palette.grey[600]
                }
              />
            )}
            <Column>
              <Typography
                textAlign="start"
                fontSize={paramsSize.fontSizeLabel}
                color={engineConfig?.global?.preview?.label || "grey.700"}
                noWrap
              >
                {props.labelStartDate}
              </Typography>
              {renderDate({ date: props.startDate, textAlign: "start" })}
            </Column>
          </Row>
        </Column>
        <Badge
          background={engineConfig?.global?.preview?.background}
          bordercolor={engineConfig?.global?.preview?.border}
          size={size}
          disabled={disabled}
        >
          <Svgs.MoonIcon
            width={paramsSize.sizeIcon * 0.8}
            height={paramsSize.sizeIcon * 0.8}
            fill={
              engineConfig?.global?.preview?.icon || theme.palette.grey[600]
            }
          />
          <Typography
            fontSize={paramsSize.fontSizeLabel}
            fontWeight="500"
            color={color}
          >
            {props.getLabelNights && props.getLabelNights(totalOfDays)}
          </Typography>
        </Badge>
        <Column alignItems="flex-end">
          <Row>
            <Column>
              <Typography
                textAlign="end"
                fontSize={paramsSize.fontSizeLabel}
                color={engineConfig?.global?.preview?.label || "grey.700"}
                noWrap
              >
                {props.labelEndDate}
              </Typography>
              {renderDate({ date: props.endDate, textAlign: "end" })}
            </Column>
            {engineConfig?.global?.preview?.showIcon && (
              <Svgs.CalendarIcon
                width={paramsSize.sizeIcon}
                height={paramsSize.sizeIcon}
                fill={
                  engineConfig?.global?.preview?.icon || theme.palette.grey[600]
                }
              />
            )}
          </Row>
        </Column>
      </>
    );
  } else if (props.type === "link") {
    return (
      <Row>
        <Typography
          textAlign="start"
          fontSize={16}
          color={theme.palette.text.primary}
          fontWeight="500"
          noWrap
          className="link"
        >
          {props.value || props.label}
        </Typography>
        <ContainerIcon open={open}>
          <Svgs.ChevronDownIcon
            width={params.sizeIcon}
            height={params.sizeIcon}
            stroke={theme.palette.text.primary}
          />
        </ContainerIcon>
      </Row>
    );
  }
  return null;
};

export default Content;
