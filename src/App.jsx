import { Box } from "@mui/material"
import { Portfolios } from "./features/portfolios/Portfolios"
import { ProfilePhoto } from "./features/profilePhoto/ProfilePhoto"
import { Introduction } from "./features/introduction/Introduction"

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", p: { xs: "0px 100px", md: "100px 200px" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "800px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Introduction/>
          <ProfilePhoto/>
        </Box>
        <Portfolios/>
      </Box>
    </Box>
  )
}

export default App
