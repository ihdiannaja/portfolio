import { Box } from "@mui/material"
import { Introduction } from "./introduction/Introduction"
import { ProfilePhoto } from "./profilePhoto/ProfilePhoto"
import { Portfolios } from "./portfolios/Portfolios"

export const Index = () => {
    return (
    <Box sx={{ bgcolor: "cyan", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Box sx={{ display: "flex", maxWidth: "800px" }}>
            <Introduction/>
            <ProfilePhoto/>
        </Box>
        <Portfolios style={{ maxWidth: "800px" }}/>
    </Box>
    )
}