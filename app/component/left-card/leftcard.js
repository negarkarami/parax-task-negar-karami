"use client";
import {useEffect, useState} from "react";
import styles from './leftcard.module.css'
import Image from 'next/image'
import {Box, Button, FormControl, MenuItem, Select, Stack, styled, Typography} from "@mui/material";
import imgCardLeft from "../../../public/img/Ellipse 1.png";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Constants} from "@/app/component/Constants";
import axios from "axios";


const StyledBoxWrap  = styled(Box)({
    backgroundColor: '#2D2F32',
    borderRadius: '5px',
})

const StyledFormControl  = styled(FormControl)({
    borderRadius: '5px',
    backgroundColor:"white",
    marginTop:"5px"
})

const StyledTypography  = styled(Typography)({
    color:"#545F71",
    fontSize: "13px",
    paddingTop:"20px"
})

const StyledButton  = styled(Button)({
    backgroundColor:"#545F71",
    fontSize: "13px",
    textTransform:"capitalize",
    "&:hover" :{
        backgroundColor: "#f5f5f5",
        color:"#000",
    },
})

const LeftCard = () => {
    const [value, setValue] = useState([]);
    const [data, setData] = useState([]);

    const handleChange= (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                console.log("ok 1000N", response.data.results);
                setData(response.data.results);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])



    return(
        <StyledBoxWrap sx={{height:{xs:"80vh", sm:"70vh", md:"70vh"}}}>
            <div className={styles.BoxCrd}>
                <Box>
                    <StyledTypography variant="h6">{Constants.selectPokemon}</StyledTypography>
                    <StyledFormControl fullWidth size={"small"}>
                        <Select
                            labelId="simple-select-label"
                            value={value}
                            onChange={handleChange}
                        >
                            {data && data.map((item, index) => {
                                return <MenuItem value={index}>{item.name}</MenuItem>;
                            })}
                        </Select>
                    </StyledFormControl>
                </Box>
                <div className={styles.WrapImg}>
                    <Image
                        src={imgCardLeft}
                        width={170}
                        height={170}
                        alt="Picture of the author"
                    />
                </div>
                <Box sx={{textAlign:"left", marginTop:"5%", width:"70%"}}>
                    <Typography variant="h6"  sx={{color:'#fff', fontSize:"17px"}}>{Constants.shortDescription}</Typography>
                    <Typography variant="span" sx={{color:'#fff', fontSize:"12px"}} >{Constants.descriptionLeft}</Typography>
                </Box>
                <Stack direction="row" justifyContent="space-between" mt={9}>
                    <StyledButton variant="contained" sx={{paddingRight:"30px"}}  startIcon={<ArrowCircleLeftOutlinedIcon/>}>{Constants.prev}</StyledButton>
                    <StyledButton variant="contained" sx={{paddingLeft:"30px"}}  endIcon={<ArrowCircleRightOutlinedIcon/>}>{Constants.next}</StyledButton>
                </Stack>
            </div>
        </StyledBoxWrap>
    )

}

export default LeftCard