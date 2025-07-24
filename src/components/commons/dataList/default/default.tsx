import { Fragment, type JSX } from "react";
import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
//constants
import { Svgs } from "@constants";
//styles
import {
  Container,
  Content,
  Header,
  HeaderTop,
  IconButton,
} from "./default.styles";
//types
import type { DataListProps } from "../dataList.types";

const fakeData = new Array(10).fill(10);

function Default<T>(props: DataListProps<T>): JSX.Element {
  const {
    title,
    subTitle,
    showSearch = true,
    placeholderSearch,
    valueSearch,
    data,
    size = { xl: 12, lg: 12, md: 12, sm: 12, xs: 12 },
    gap = 1,
    loading,
    isGrid,
    componentLoader,
    renderFooter,
    onClickClose,
    onChangeSearch,
  } = props;
  const theme = useTheme();

  //render
  const renderItem = () => {
    if (isGrid) {
      if (loading) {
        return (
          <Grid container p={1} spacing={gap}>
            {fakeData.map((_, index) => (
              <Grid key={index} size={size}>
                {componentLoader}
              </Grid>
            ))}
          </Grid>
        );
      }
      return (
        <Grid container p={1} spacing={gap}>
          {data.map((item, index) => (
            <Grid key={index} size={size}>
              {props.renderItem({ item, index })}
            </Grid>
          ))}
        </Grid>
      );
    }
    if (loading) {
      return fakeData.map((_, index) => (
        <Fragment key={index}>{componentLoader}</Fragment>
      ));
    }
    return data.map((item, index) => (
      <Fragment key={index}>{props.renderItem({ item, index })}</Fragment>
    ));
  };
  return (
    <Container>
      <Header showSearch={showSearch}>
        <HeaderTop>
          <Typography fontSize={16} color="grey.700">
            {title}
          </Typography>
          <Typography fontSize={12} color="grey.500">
            {subTitle}
          </Typography>
          <IconButton onClick={onClickClose}>
            <Svgs.IconXClose sx={{ color: "greey.900" }} />
          </IconButton>
        </HeaderTop>
        {showSearch && (
          <TextField
            sx={{ m: theme.spacing(1, 0) }}
            value={valueSearch}
            fullWidth
            size="small"
            variant="outlined"
            placeholder={placeholderSearch}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Svgs.IconSearchMd sx={{ color: "greey.400" }} />
                  </InputAdornment>
                ),
              },
            }}
            onChange={onChangeSearch}
          />
        )}
      </Header>
      <Content showSearch={showSearch}>{renderItem()}</Content>
      {renderFooter && renderFooter()}
    </Container>
  );
}

export default Default;
