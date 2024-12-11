import { Typography } from "@mui/material";

const Header = () => {
    return (
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
            {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
        </Typography>
    );
}

export default Header;
