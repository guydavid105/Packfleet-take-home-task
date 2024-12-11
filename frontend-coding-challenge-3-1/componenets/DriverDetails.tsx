import React from "react";
import {
  Box,
  Typography,
  List,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StopCard from "./StopCard";
import { DriverModel } from "../models/DriverModel";

interface DriverDetailsProps {
  driver: DriverModel;
  onClose: () => void;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({ driver, onClose }) => {
  return (
    <Box
      onBlur={onClose}
      sx={{
        width: "20rem",
        maxHeight: "90vh",
        backgroundColor: "#ffffff",
        boxShadow: 3,
        overflowY: "auto",
        borderRadius: "8px",
        padding: "16px",
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {driver.name}
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ marginBottom: "16px", color: "gray" }}>
        Driver details
      </Typography>

      <List>
        {driver.stops.map((stop) => (
            <StopCard stop={stop}/>
        ))}
      </List>
    </Box>
  );
};

export default DriverDetails;