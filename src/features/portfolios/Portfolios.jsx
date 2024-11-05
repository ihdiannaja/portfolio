import { Box, Typography } from "@mui/material"
import { CardsWithButton } from "../../shared/components/cards/Cards"

export const Portfolios = () => {
    return (
        <Box sx={{ marginY: "16px" }}>
            <Typography variant="body1" fontWeight={"bold"}>Portfolio</Typography>
            <CardsWithButton 
                title={"NaNotes"}
                description={"An easy-to-use web-based app for basic note management, allowing users to create, edit, and delete notes as needed. Designed to keep note-taking simple and organized."}
                techStack={"Vite + React JS + Python Flask + PostgreSQL"}
            />
        </Box>
    )
}