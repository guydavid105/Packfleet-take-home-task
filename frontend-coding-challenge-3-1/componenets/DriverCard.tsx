import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { DriverModel } from "../models/DriverModel";

interface DriverCardProps {
    driver: DriverModel;
    key: number;
    onClick: () => void;
    setSelectedDriver: (driver: DriverModel) => void;
}

const DriverCard: React.FC<DriverCardProps> = ({ driver, key, onClick, setSelectedDriver }) => {
    return (
        <Card
            key={key}
            onClick={()=>{
                setSelectedDriver(driver);
                onClick();
            }}
            sx={{
              marginBottom: "16px",
              backgroundColor: "#ffffff",
            }}
        >
            <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {driver.name}
                </Typography>
                <Divider sx={{ marginY: "8px" }} />

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">{driver.stops.length} stops</Typography>
                    <Typography variant="body2">
                        {driver.milesLeft} mi left
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between" mt={1}>
                    <Typography variant="body2">
                        {driver.shiftLength} shift length
                    </Typography>
                <Typography variant="body2">{driver.SDH.toFixed(2)} SDH</Typography>
                </Box>

                <Typography variant="body2" sx={{ textAlign: "right", marginTop: "8px" }}>
                    {driver.ending} ending
                </Typography>
            </CardContent>
        </Card>
    )
};

export default DriverCard;
