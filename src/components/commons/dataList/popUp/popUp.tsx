import { Fragment, type JSX } from "react";
import { Grid, Typography, TextField, InputAdornment } from "@mui/material";
//constants
import { Svgs } from "@constants";
//styles
import {
  Container,
  Content,
  Header,
  HeaderTop,
  IconButton,
} from "./popUp.styles";
//types
import type { DataListProps } from "../dataList.types";

const fakeData = new Array(10).fill(10);

function PopUp<T>(props: DataListProps<T>): JSX.Element {
  const {
    title,
    subTitle,
    showSearch = true,
    valueSearch,
    placeholderSearch,
    data,
    size = { xl: 2, lg: 3, md: 4, sm: 6, xs: 12 },
    gap = 1,
    sxContent,
    loading,
    isGrid,
    componentLoader,
    renderFooter,
    onClickClose,
    onChangeSearch,
  } = props;

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
          <Typography fontSize={16} fontWeight="700">
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
            fullWidth
            size="small"
            variant="outlined"
            value={valueSearch}
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
      <Content sx={sxContent} showSearch={showSearch}>
        {renderItem()}
      </Content>
      {renderFooter && renderFooter()}
    </Container>
  );
}

export default PopUp;
