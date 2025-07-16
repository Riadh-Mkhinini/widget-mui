import type { FC } from "react";
//constants
import { Svgs } from "@constants";
//context
import { useIBE } from "@contextAPI";
//components
import { Preview } from "../commons";
//types
import type { PromoCodeProps } from "./promoCode.types";

const PromoCode: FC<PromoCodeProps> = (props) => {
  const { value, onChangeValue } = props;
  const { localeText, engineConfig, paramsSize } = useIBE();

  //functions
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChangeValue?.(event.target.value);
  };
  //render
  return (
    <Preview
      type="input"
      layout={engineConfig?.global?.layout}
      placeholder={localeText?.promoCode?.previewPlaceholder}
      value={value}
      icon={
        <Svgs.IconPromoCode
          sx={{
            fontSize: paramsSize.sizeIcon,
            color: engineConfig?.global?.preview?.icon || "primary.main",
          }}
        />
      }
      onChange={onChange}
    />
  );
};

export { PromoCode };
