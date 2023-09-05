"use client";
import {Box, styled, Typography} from "@mui/material";
import {Constants} from "@/app/component/Constants";

const StyledBoxWrap  = styled(Box)({
    backgroundColor: '#2D2F32',
    borderRadius: '5px',
})

const StyledTypography  = styled(Typography)({
    color:"#fff",
    fontSize: "15px",
    paddingTop:"25px"
})
const StyledTypographySmall  = styled(Typography)({
    color:"#fff",
    fontSize: "12px",
    paddingTop:"20px"
})





const RightCard = () => {
    return(
        <StyledBoxWrap sx={{height:{xs:"30vh", sm:"70vh", md:"70vh"}}}>
            <Box sx={{textAlign:"left", marginLeft:"30px"}}>
                <StyledTypography variant="h6">{Constants.pokemonBulbasaur}</StyledTypography>
                <StyledTypography variant="h6">{Constants.Abilities}</StyledTypography>
                <StyledTypographySmall variant="span">{Constants.overgrowChlorophyll}</StyledTypographySmall>
                <StyledTypography variant="h6">{Constants.stats}</StyledTypography>
                <StyledTypographySmall variant="span">{Constants.DescriptionRight}</StyledTypographySmall>
            </Box>
        </StyledBoxWrap>
    )

}

export default RightCard