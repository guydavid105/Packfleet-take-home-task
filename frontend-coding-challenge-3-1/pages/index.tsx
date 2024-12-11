import Head from "next/head";
import DriverList from "../componenets/DriverList";
import { useState, useEffect } from "react";
import DriverDetails from "../componenets/DriverDetails";
import { Box } from "@mui/material";
import { DriverModel } from "../models/DriverModel";

export default function Home() {
  const [showPanel, setShowPanel] = useState(false);
  const [drivers, setDrivers] = useState<DriverModel[] | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<DriverModel | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await fetch("/api/driverEndpoint");
      const data = await response.json();
      setDrivers(data);
    };

    fetchDrivers();
  }, []);

  return (
    <main className="bg-slate-100 w-full min-h-screen flex justify-start items-start">
      <Head>
      <title>Packfleet Coding Challenge</title>
      </Head>

      {drivers && 
        <DriverList 
          drivers={drivers} 
          onCardClick={() => setShowPanel(true)} 
          setSelectedDriver={setSelectedDriver}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setShowPanel={setShowPanel}
        />
      }

      {showPanel && selectedDriver && (
        <Box 
          onBlur={() => setShowPanel(false)}
          sx={{
            position: "fixed",
            top: "1%",
            left: "21rem",
          }}
        >
          <DriverDetails onClose={() => setShowPanel(false)} driver={selectedDriver} />
        </Box>
      )}

      <div className="flex justify-center items-center w-full">
            <h1>Map</h1>
      </div>
    </main>
  );
}
