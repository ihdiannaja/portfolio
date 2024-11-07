import PropTypes from "prop-types"
import { Box, Typography } from "@mui/material"
import { CardsWithButton } from "../../shared/components/cards/Cards"

export const Portfolios = ({ style }) => {
    return (
        <Box sx={[{ marginTop: "24px" }, style]}>
            <Typography variant="body1" fontWeight={"bold"}>Portfolio</Typography>
            <CardsWithButton 
                url={"https://nanotes.vercel.app"}
                title={"NaNotes"}
                description={"An easy-to-use web-based app for basic note management, allowing users to create, edit, and delete notes as needed. Designed to keep note-taking simple and organized."}
                techStack={"Vite + React JS + Python Flask + PostgreSQL"}
            />
        </Box>
    )
}
Portfolios.propTypes = {
  style: PropTypes.any
}
