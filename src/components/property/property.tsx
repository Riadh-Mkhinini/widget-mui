import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";
//constants
import { Svgs } from "@constants";
//context
import { useIBE } from "@contextAPI";
//components
import { Popover, Preview } from "../commons";
import { ContentProperty } from "./contentProperty/contentProperty";
//styles
import { Container } from "./property.styles";
//types
import type { PropertyShortData, PropertyProps } from "./property.types";

const Property: FC<PropertyProps> = (props) => {
  const { value, onChange } = props;
  const { t } = useTranslation();
  const { engineConfig, paramsSize } = useIBE();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "property-popover" : undefined;

  //functions
  const onClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  //render
  return (
    <Container>
      <Preview
        type="simple"
        id={id}
        open={open}
        label={t("property.preview_label")}
        placeholder={t("property.preview_placeholder")}
        value={value?.name}
        icon={
          <Svgs.IconHotel
            sx={{
              fontSize: paramsSize.sizeIcon,
              color: engineConfig?.global?.preview?.icon || "primary.main",
            }}
          />
        }
        layout={engineConfig?.global?.layout}
        onClickOpen={onClickOpen}
      />
      <Popover
        mode={engineConfig?.property?.popUpMode}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        marginThreshold={0}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <ContentProperty
          config={engineConfig?.property}
          data={props.data}
          onChange={onChange}
          onClose={onClose}
        />
      </Popover>
    </Container>
  );
};

export { Property, type PropertyShortData };
