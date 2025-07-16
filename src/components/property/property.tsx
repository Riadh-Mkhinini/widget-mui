import { type FC, useEffect, useMemo, useState } from "react";
//constants
import { Svgs } from "@constants";
//context
import { useIBE } from "@contextAPI";
//components
import { DataList, Popover, Preview } from "../commons";
import CardGrouped from "./cardGrouped/cardGrouped";
import CardProperty from "./cardProperty/cardProperty";
import CardItem from "./cardItem/cardItem";
//utils
import { groupListPropertyBy } from "./property.utils";
//styles
import { Container } from "./property.styles";
//types
import type {
  CityGrouped,
  CountryGrouped,
  PropertyItem,
  PropertyProps,
} from "./property.types";

const Property: FC<PropertyProps> = (props) => {
  const { value, onChange } = props;
  const { localeText, engineConfig, paramsSize } = useIBE();
  //
  const [data, setData] = useState<Array<PropertyItem>>([]);
  const [dataGrouped, setDataGrouped] = useState<Array<CountryGrouped>>([]);
  const [search, setSearch] = useState<string>("");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? "property-popover" : undefined;

  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const filteredDataGrouped = useMemo(() => {
    if (!search) return dataGrouped;
    return dataGrouped
      .map((countryGroup) => {
        const filteredCities = countryGroup.data
          .map((cityGroup) => {
            const filteredItems = cityGroup.data.filter(
              (item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase())
            );
            return filteredItems.length > 0
              ? { ...cityGroup, data: filteredItems }
              : null;
          })
          .filter(Boolean) as CityGrouped[];

        return filteredCities.length > 0
          ? { ...countryGroup, data: filteredCities }
          : null;
      })
      .filter(Boolean) as CountryGrouped[];
  }, [dataGrouped, search]);

  //useEffect
  useEffect(() => {
    if (engineConfig?.property?.mode === "grouped") {
      const grouped = groupListPropertyBy(props.data || []);
      setDataGrouped(grouped);
    } else {
      setData(props.data || []);
    }
  }, [engineConfig?.property?.mode, props.data]);

  //functions
  const onClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const onClickItem = (item: PropertyItem) => {
    setAnchorEl(null);
    onChange?.(item);
  };
  const onChangeSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(event.target.value);
  };

  //render
  const renderContent = () => {
    if (engineConfig?.property?.mode === "grouped") {
      return (
        <DataList
          title={localeText?.property?.popUpTitle}
          subTitle={localeText?.property?.popUpSubTitle}
          placeholderSearch={localeText?.property?.popUpSearchPlaceholder}
          mode={engineConfig?.property?.popUpMode}
          data={filteredDataGrouped}
          showSearch={engineConfig?.property?.showSearch}
          valueSearch={search}
          renderItem={({ item }) => (
            <CardGrouped item={item} onClick={onClickItem} />
          )}
          onClickClose={onClose}
          onChangeSearch={onChangeSearch}
        />
      );
    } else if (engineConfig?.property?.mode === "cards") {
      return (
        <DataList
          title={localeText?.property?.popUpTitle}
          subTitle={localeText?.property?.popUpSubTitle}
          placeholderSearch={localeText?.property?.popUpSearchPlaceholder}
          mode={engineConfig?.property?.popUpMode}
          data={filteredData}
          showSearch={engineConfig?.property?.showSearch}
          valueSearch={search}
          isGrid
          size={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }}
          renderItem={({ item }) => (
            <CardProperty item={item} onClick={onClickItem} />
          )}
          onClickClose={onClose}
          onChangeSearch={onChangeSearch}
        />
      );
    }
    return (
      <DataList
        title={localeText?.property?.popUpTitle}
        subTitle={localeText?.property?.popUpSubTitle}
        placeholderSearch={localeText?.property?.popUpSearchPlaceholder}
        mode={engineConfig?.property?.popUpMode}
        data={filteredData}
        showSearch={engineConfig?.property?.showSearch}
        valueSearch={search}
        renderItem={({ item }) => (
          <CardItem
            sx={
              engineConfig?.property?.popUpMode === "default"
                ? { minHeight: 50 }
                : { minHeight: 58, borderRadius: 1 }
            }
            item={item}
            getOptionLabel={(item) => `${item.id}- ${item.name}`}
            getAvatarLabel={(item) => item.name.substring(0, 2).toUpperCase()}
            onClick={onClickItem}
          />
        )}
        onClickClose={onClose}
        onChangeSearch={onChangeSearch}
      />
    );
  };

  return (
    <Container>
      <Preview
        type="simple"
        id={id}
        open={open}
        label={localeText?.property?.previewLabel}
        placeholder={localeText?.property?.previewPlaceholder}
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
        {renderContent()}
      </Popover>
    </Container>
  );
};

export { Property, type PropertyItem };
