import { Box, Typography, Button } from "@mui/material";

export interface WidgetProps {
  engineId: string;
}

const Widget = ({ engineId }: WidgetProps) => {
  return (
    <Box p={2} borderRadius={2} boxShadow={2} maxWidth={300}>
      <Typography variant="h6">Bookini Widget</Typography>
      <Typography variant="body2" mb={2}>
        Engine ID: {engineId}
      </Typography>
      <Button variant="contained" color="primary" fullWidth>
        Start Booking
      </Button>
    </Box>
  );
};

export default Widget;
