import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../themes";

const Header = ({title, subTitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box mb='30px'>
            <Typography variant="h4" color={colors.grey[100]} fontWeight="bold" sx={{ mr: "5px"}}>{title}</Typography>
            <Typography  color={colors.greenAccent[400]}>{subTitle}</Typography>
        </Box>
    )
}
export default Header;