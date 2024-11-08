import { Box, Typography } from "@mui/material"
import { CircledIconButton } from "../../shared/components/button/Button"
import { FileDownload, GitHub, LinkedIn, Mail } from "@mui/icons-material"

export const Introduction = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "600px", gap: "16px" }}>
            <Typography variant="h6">Hi, I&apos;m</Typography>
            <Typography variant="h4" fontWeight={"bold"}>Ihdiannaja</Typography>
            <Typography variant="h6">Full-stack engineer</Typography>
            <Typography variant="body2" fontStyle="italic">I am currently working under Sinarmas Mining and placed at Sinarmas Multiartha, holding company for Sinarmas financial services industries.</Typography>

            <Box sx={{ display: "flex", gap: "4px" }}>
                <CircledIconButton 
                    Icon={GitHub}
                    tooltipInfo={"Github"}
                    url={"https://github.com/ihdiannaja"}
                />
                <CircledIconButton 
                    Icon={LinkedIn}
                    tooltipInfo={"LinkedIn"}
                    url={"https://www.linkedin.com/in/ihdiannaja/"}
                />
                <CircledIconButton 
                    Icon={Mail}
                    tooltipInfo={"ihdiannaja00@gmail.com"}
                    url={"https://mailto:ihdiannaja00@gmail.com"}
                />
                <CircledIconButton 
                    Icon={FileDownload}
                    tooltipInfo={"CV"}
                    url={"https://drive.google.com/drive/u/0/folders/1rvL6069FNqKJvErrQRMeWGei4-vO0BfA"}
                />
            </Box>
        </Box>
    )
}