import { type JSX, useMemo } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Select as MuiSelect,
  Stack,
} from "@mui/material";
//styles
import { Placeholder } from "./select.styles";
//Types
import type { ColorInputProps, SelectProps } from "./select.types";

function Select<T>(props: SelectProps<T>): JSX.Element {
  const {
    label,
    placeholder,
    value,
    variant = "outlined",
    size = "medium",
    fullWidth = true,
    data,
    heightPaper = 300,
    disabled,
    multiple,
    color,
    hideLabel,
    sxContainer,
    sx,
    sxMenuItem,
    sxPlaceholder,
    IconComponent,
    error,
    helperText,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    onChange,
  } = props;
  const portalContainer = (window as any)
    .__BOOKINI_WIDGET_PORTAL_CONTAINER__ as HTMLElement | undefined;

  //render
  const renderItem = () => {
    return data.map((item, index) => {
      if (!getOptionValue || !getOptionLabel) return null;
      return (
        <MenuItem
          key={index}
          sx={sxMenuItem}
          disabled={getOptionDisabled && getOptionDisabled(item)}
          value={getOptionValue(item)}
        >
          {getOptionLabel(item)}
        </MenuItem>
      );
    });
  };
  const getColor = (): ColorInputProps => {
    if (color) return color;
    return error ? "error" : undefined;
  };

  const renderValue = useMemo(() => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return () => <Placeholder sx={sxPlaceholder}>{placeholder}</Placeholder>;
    } else if (props.renderValue) {
      return props.renderValue;
    }
    return undefined;
  }, [value, props.renderValue, sxPlaceholder, placeholder]);

  const customProps = useMemo(
    () => (variant !== "outlined" ? { disableUnderline: true } : {}),
    [variant]
  );

  return (
    <Stack sx={sxContainer}>
      {!hideLabel && <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>}
      <FormControl variant={variant} size={size} fullWidth={fullWidth}>
        <MuiSelect
          size={size}
          fullWidth={fullWidth}
          variant={variant}
          disabled={disabled}
          value={value || ""}
          renderValue={renderValue}
          color={getColor()}
          error={error}
          multiple={multiple}
          displayEmpty
          MenuProps={{
            PaperProps: { sx: { maxHeight: heightPaper } },
            marginThreshold: 0,
            container: portalContainer,
          }}
          sx={sx}
          {...customProps}
          IconComponent={IconComponent}
          onChange={onChange}
        >
          {renderItem()}
        </MuiSelect>
        {helperText && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </FormControl>
    </Stack>
  );
}
export { Select };
