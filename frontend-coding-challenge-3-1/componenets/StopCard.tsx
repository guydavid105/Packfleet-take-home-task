import { Card, CardContent, Box, Typography, Divider } from "@mui/material";
import { StopModel } from "../models/StopModel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface StopCardProps {
    stop: StopModel;
}

const StopCard: React.FC<StopCardProps> = ({ stop }) => {
    return (
        <Card key={stop.id} sx={{ marginBottom: "16px" }}>
            <CardContent>
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                }}
                >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        {stop.title}
                    </Typography>
                        {stop.status === "completed" ? (
                            <CheckCircleIcon sx={{ color: "green" }} />
                        ) : stop.status === "missed" ? (
                            <CancelIcon sx={{ color: "red" }} />
                        ) : null}
                        </Box>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                    {stop.address}
                    </Typography>

                    <Divider sx={{ marginY: "8px" }} />

                    <Typography variant="body2">{stop.trackingPhrase[0]}-{stop.trackingPhrase[1]}</Typography>
                    <Typography variant="body2">{stop.stopTime}</Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                    {stop.timeSlot}
                    </Typography>

                    <Typography
                    variant="body2"
                    sx={{ textAlign: "right", marginTop: "8px" }}
                    >
                    {stop.ETA} ETA
                    </Typography>
                </CardContent>
        </Card>
    )
};

export default StopCard;