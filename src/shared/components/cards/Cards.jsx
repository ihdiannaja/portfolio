import PropTypes from "prop-types"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

export const CardsWithButton = ({ title, url, description, techStack }) => {
    const handleClick = () => {
        window.open(url, '_blank')
    }

    return (
        <Card
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                marginTop: "8px",
                minWidth: 288,
                borderRadius: "12px",
                boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
            }}
        >
            <CardContent>
                <Typography variant="body1" fontWeight={"bold"}>{title}</Typography>
                <Typography variant="caption">{description}</Typography>
                <br/>
                <Typography variant="caption">{" Built with : "}</Typography>
                <Typography variant="caption" fontWeight={"bold"}>{techStack}</Typography>

            </CardContent>
            <CardActions sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end", m: 0, p: "0px 16px 8px 16px" }}>
                <Button 
                    onClick={handleClick}
                    variant="contained" 
                    size="small" 
                    sx={{ 
                        bgcolor: "#636873",
                        '&:hover': {
                            backgroundColor: '#828893',
                            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                            transform: "scale(1.1)",
                        },        
                    }}
                >Go to the Page</Button>
            </CardActions>
        </Card>
    )
}
CardsWithButton.propTypes = {
  description: PropTypes.any,
  techStack: PropTypes.any,
  title: PropTypes.any,
  url: PropTypes.any
}
