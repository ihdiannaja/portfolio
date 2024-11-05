import { Box } from "@mui/material"
import { Portfolios } from "./features/portfolios/Portfolios"
import { ProfilePhoto } from "./features/profilePhoto/ProfilePhoto"
import { Introduction } from "./features/introduction/Introduction"

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "800px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Introduction/>
        <ProfilePhoto/>
      </Box>
      <Portfolios/>
    </Box>
  )
}

export default App
