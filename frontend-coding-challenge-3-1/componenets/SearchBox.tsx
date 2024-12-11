import { Autocomplete, TextField } from "@mui/material";
import { DriverModel } from "../models/DriverModel";

interface SearchBoxProps {
    drivers: DriverModel[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setSelectedDriver: (driver: DriverModel) => void;
    setShowPanel: (showPanel: boolean) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ drivers, searchQuery, setSearchQuery, setSelectedDriver, setShowPanel }) => {
    const filteredDrivers = drivers.filter((driver) => {
        const lowercasedQuery = searchQuery.toLowerCase();
        return (
            driver.name.toLowerCase().includes(lowercasedQuery)
        );
    });
    const stops = drivers.map((driver) => driver.stops).flat();
    const filteredStops = stops.filter((stop) => {
        const lowercasedQuery = searchQuery.toLowerCase();
        return (
            stop.title.toLowerCase().includes(lowercasedQuery)
        );
    });
    const filteredOptions = [...filteredDrivers.map((driver) => driver.name), ...filteredStops.map((stop) => stop.title)];
    const uniqueOptions = filteredOptions.filter((option, index) => filteredOptions.indexOf(option) === index);

    return (
        <Autocomplete
            freeSolo
            options={uniqueOptions} 
            renderInput={(params) => (
            <TextField
                {...params}
                label="Search drivers or stops"
                variant="outlined"
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                style={{ marginBottom: "20px" }}
            />
            )}
            onInputChange={(e, newInputValue) => {
                setSearchQuery(newInputValue);
                const newDriver = drivers.find((driver) => driver.name === newInputValue);
                const newStop = stops.find((stop) => stop.title === newInputValue);
                let driverThroughStop;
                if (newStop) {
                    driverThroughStop = drivers.find((driver) => driver.stops.includes(newStop));
                }
                if (newDriver) {
                    setSelectedDriver(newDriver);
                    setShowPanel(true);
                } else if (driverThroughStop) {
                    setSelectedDriver(driverThroughStop);
                    setShowPanel(true);
                }
            }}
            renderOption={(props, option) => {               
                return (
                    <li {...props}>
                    {option}
                    </li>
                );
            }}
        />
    )
}

export default SearchBox;