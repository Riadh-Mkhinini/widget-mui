import React, { type FC, forwardRef } from "react";
import { Slide, useMediaQuery, useTheme } from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
//styles
import { CustomPopover, CustomDialog } from "./popover.styles";
//types
import type { PopoverProps } from "./popover.types";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popover: FC<PopoverProps> = (props) => {
  const { children, mode, maxWidth = "xl", ...rest } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // ✅ Get the container element instead of the ShadowRoot
  const portalContainer = (window as any)
    .__BOOKINI_WIDGET_PORTAL_CONTAINER__ as HTMLElement | undefined;

  if (!portalContainer) {
    console.warn("Popover: MUI portal container not set up correctly.");
  }

  if (mode === "pop-up") {
    return (
      <CustomDialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth={maxWidth}
        scroll="paper"
        open={props.open}
        slots={{ transition: Transition }}
        onClose={props.onClose}
        container={portalContainer}
        slotProps={{
          root: { container: portalContainer },
        }}
      >
        {children}
      </CustomDialog>
    );
  }
  return (
    <CustomPopover
      {...rest}
      marginThreshold={0}
      disablePortal={false}
      slots={{ transition: fullScreen ? Transition : undefined }}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      container={portalContainer}
      slotProps={{ root: { container: portalContainer } }}
    >
      {children}
    </CustomPopover>
  );
};

export { Popover };
