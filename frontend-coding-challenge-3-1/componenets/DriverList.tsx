import React from "react";
import { Box, List } from "@mui/material";
import Header from "./Header";
import SearchBox from "./SearchBox";
import DriverCard from "./DriverCard";
import { DriverModel } from "../models/DriverModel";

interface DriverListProps {
    drivers: DriverModel[];
    searchQuery: string;
    onCardClick: () => void;
    setSelectedDriver: (driver: DriverModel) => void;
    setSearchQuery: (query: string) => void;
    setShowPanel: (showPanel: boolean) => void;
}

const DriverList: React.FC<DriverListProps> = ({ 
    drivers, 
    searchQuery, 
    onCardClick, 
    setSelectedDriver, 
    setSearchQuery,
    setShowPanel, 
}) => {
  return (
    <Box
      sx={{
        minWidth: "20rem",
        maxHeight: "36rem",
        padding: "16px",
        margin: "8px",
        backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        overflowY: "scroll",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
        <Header />
        <SearchBox 
            drivers={drivers} 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            setSelectedDriver={setSelectedDriver}
            setShowPanel={setShowPanel}
        />

        <List>
            {drivers.map((driver, index) => (
                <DriverCard key={index} driver={driver} onClick={onCardClick} setSelectedDriver={setSelectedDriver}/>
            ))}
      </List>
    </Box>
  );
};

export default DriverList;