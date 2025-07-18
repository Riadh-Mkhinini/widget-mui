import { type FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
//components
import { DataList } from "../../commons";
import CardGrouped from "./cardGrouped/cardGrouped";
import CardProperty from "./cardProperty/cardProperty";
import CardItem from "./cardItem/cardItem";
//utils
import { groupListPropertyBy } from "./contentProperty.utils";
//types
import type {
  CityGrouped,
  CountryGrouped,
  PropertyItem,
} from "../property.types";
import type { ContentPropertyProps } from "./contentProperty.types";

const ContentProperty: FC<ContentPropertyProps> = (props) => {
  const { config, onChange } = props;
  const { t } = useTranslation();
  //
  const [data, setData] = useState<Array<PropertyItem>>([]);
  const [dataGrouped, setDataGrouped] = useState<Array<CountryGrouped>>([]);
  const [search, setSearch] = useState<string>("");

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
    if (config?.mode === "grouped") {
      const grouped = groupListPropertyBy(props.data || []);
      setDataGrouped(grouped);
    } else {
      setData(props.data || []);
    }
  }, [config?.mode, props.data]);

  //functions

  const onClose = () => {
    props.onClose?.();
  };
  const onClickItem = (item: PropertyItem) => {
    onChange?.(item);
    onClose();
  };
  const onChangeSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(event.target.value);
  };

  //render
  if (config?.mode === "grouped") {
    return (
      <DataList
        title={t("property.pop_up_title")}
        subTitle={t("property.pop_up_sub_title")}
        placeholderSearch={t("property.pop_up_search_placeholder")}
        mode={config?.popUpMode}
        data={filteredDataGrouped}
        showSearch={config?.showSearch}
        valueSearch={search}
        renderItem={({ item }) => (
          <CardGrouped item={item} onClick={onClickItem} />
        )}
        onClickClose={onClose}
        onChangeSearch={onChangeSearch}
      />
    );
  } else if (config?.mode === "cards") {
    return (
      <DataList
        title={t("property.pop_up_title")}
        subTitle={t("property.pop_up_sub_title")}
        placeholderSearch={t("property.pop_up_search_placeholder")}
        mode={config?.popUpMode}
        data={filteredData}
        showSearch={config?.showSearch}
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
      title={t("property.pop_up_title")}
      subTitle={t("property.pop_up_sub_title")}
      placeholderSearch={t("property.pop_up_search_placeholder")}
      mode={config?.popUpMode}
      data={filteredData}
      showSearch={config?.showSearch}
      valueSearch={search}
      renderItem={({ item }) => (
        <CardItem
          sx={
            config?.popUpMode === "default"
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

export { ContentProperty, type PropertyItem };
