import { BadgeOutlined } from "@mui/icons-material"
import { Box } from "@mui/material"

export const ProfilePhoto = () => {
    return (
        <Box
            sx={{
                width: "200px",
                height: "200px",          
                borderRadius: "50%",
                bgcolor: "#fff49b",
                transition: "all 0.3s ease",

                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <BadgeOutlined htmlColor="primary" sx={{ fontSize: "80px" }}/>
        </Box>
    )
}