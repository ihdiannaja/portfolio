import PropTypes from "prop-types"
import { IconButton, Tooltip } from "@mui/material"

export const CircledIconButton = ({ Icon, url, tooltipInfo, size="small", iconStyle }) => {
    const handleClick = () => {
        window.open(url, '_blank')
    }

    return (
        <Tooltip title={tooltipInfo}>
            <IconButton
                color="#C7C9CE"
                onClick={handleClick}
                size={size}
            >
                <Icon sx={iconStyle}/>
            </IconButton> 
        </Tooltip>           
    )
} 

CircledIconButton.propTypes = {
  Icon: PropTypes.any,
  buttonStyle: PropTypes.any,
  handleClick: PropTypes.any,
  iconStyle: PropTypes.any,
  size: PropTypes.string,
  tooltipInfo: PropTypes.any,
  url: PropTypes.any
}
