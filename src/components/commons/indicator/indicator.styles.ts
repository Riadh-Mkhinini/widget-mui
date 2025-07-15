import { styled } from "@mui/material";

export const Container = styled("span")<{ right?: number; left?: number }>(
  ({ left, right }) => ({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    height: "100%",
    top: 0,
    bottom: 0,
    left,
    right,
    zIndex: 999,
  })
);

export const Line = styled("span")(({ theme }) => ({
  width: 4,
  height: "100%",
  background: theme.palette.primary.dark,
}));

export const ArrowRight = styled("span")<{ size?: number }>(
  ({ theme, size }) => ({
    width: 0,
    height: 0,
    borderTop: `${size}px solid transparent`,
    borderBottom: `${size}px solid transparent`,
    borderLeft: `${size}px solid ${theme.palette.primary.dark}`,
  })
);

export const ArrowLeft = styled("span")<{ size?: number }>(
  ({ theme, size }) => ({
    width: 0,
    height: 0,
    borderTop: `${size}px solid transparent`,
    borderBottom: `${size}px solid transparent`,
    borderRight: `${size}px solid ${theme.palette.primary.dark}`,
  })
);
