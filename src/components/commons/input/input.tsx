import { type FC, useId, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
import { TextField, InputLabel, Box } from "@mui/material";
//Types
import type { ColorInputProps, InputProps } from "./input.types";

const Input: FC<InputProps> = (props) => {
  const id = useId();
  const {
    name,
    label,
    size = "medium",
    variant = "outlined",
    hideLabel,
    fullWidth = true,
    multiline,
    placeholder,
    rows,
    type,
    startAdornment,
    endAdornment,
    rules,
    disabled,
    maxRows,
    color,
    autoFocus,
    autoComplete,
    sxContainer,
    sx,
    onChange,
    getFieldValue,
    onFocus,
    onBlur,
  } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });

  //functions
  const onChangeText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    field.onChange(event);
    if (onChange) {
      onChange(event);
    }
  };

  //render
  const getColor = (): ColorInputProps => {
    if (color) return color;
    if (disabled) return undefined;
    return fieldState.error ? "error" : undefined;
  };

  const InputProps = useMemo(
    () => (variant !== "outlined" ? { disableUnderline: true } : {}),
    [variant]
  );

  return (
    <Box component="span" sx={sxContainer}>
      {!hideLabel && <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>}
      <TextField
        id={id}
        {...field}
        color={getColor()}
        autoFocus={autoFocus}
        // label={label}
        placeholder={placeholder || ""}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        type={type}
        autoComplete={autoComplete}
        disabled={disabled}
        sx={sx}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        value={
          typeof field.value === "object"
            ? getFieldValue?.(field.value)
            : field.value
        }
        onChange={onChangeText}
        error={!!fieldState.error?.message}
        helperText={fieldState.error?.message}
        onFocus={onFocus}
        onBlur={onBlur}
        slotProps={{ input: { startAdornment, endAdornment, ...InputProps } }}
      />
    </Box>
  );
};

export { Input };
