import { type FC, useMemo } from "react";
import { InputAdornment, TextField } from "@mui/material";
//contextAPI
import { useIBE } from "@contextAPI";
//types
import type { InputProps } from "./input.types";

const Input: FC<InputProps> = (props) => {
  const { placeholder, value, icon, sizes, onChange } = props;

  const { engineConfig, paramsSize } = useIBE();

  const params = useMemo(() => sizes || paramsSize, [sizes, paramsSize]);

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      slotProps={{
        input: {
          startAdornment: engineConfig?.global?.preview?.showIcon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          background: "transparent",
          fontSize: params.fontSizeValue,
          color: engineConfig?.global?.preview?.value || "grey.900",
          padding: 0,
          "& fieldset": { border: "none" },
          "& input::placeholder": {
            color: engineConfig?.global?.preview?.placeholder || "grey.500", // change this to your desired color
            opacity: 1, // ensure it's fully visible
          },
        },
      }}
      onChange={onChange}
    />
  );
};

export default Input;
