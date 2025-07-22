import { styled } from "@mui/material";

export const Content = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 70px)",
    },
    position: "relative",
  };
});

export const List = styled("div")<{ monthNumberDisplays: number }>(
  ({ theme, monthNumberDisplays }) => {
    const number = monthNumberDisplays + 1 > 3 ? 3 : monthNumberDisplays + 1;
    const template = new Array(number).fill("1fr").join(" ");
    return {
      display: "grid",
      gridTemplateColumns: template,
      gap: theme.spacing(2),
      padding: theme.spacing(2),
      overflow: "auto",
      position: "relative",
      height: "100%",
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "1fr 1fr",
      },
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        padding: theme.spacing(0, 2, 2, 2),
        maxHeight: "calc(100vh - 150px)",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        padding: theme.spacing(0, 1, 1, 1),
        maxHeight: "calc(100vh - 70px)",
      },
    };
  }
);
