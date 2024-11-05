import PropTypes from "prop-types"
import { IconButton } from "@mui/material"

export const CircledIconButton = ({ handleClick, Icon, size="small", iconStyle }) => {
    return (
        <IconButton
            color="#C7C9CE"
            onClick={handleClick}
            size={size}
        >
            <Icon sx={iconStyle}/>
        </IconButton>            
    )
} 

CircledIconButton.propTypes = {
  Icon: PropTypes.any,
  buttonStyle: PropTypes.any,
  handleClick: PropTypes.any,
  iconStyle: PropTypes.any,
  size: PropTypes.string
}
