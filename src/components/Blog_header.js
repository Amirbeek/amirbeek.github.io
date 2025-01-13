import {Container, Grid,Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";

const ArrowBack = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;

`
const Styles = styled.div`
    .picked{
        font-weight: bold;
        color: ${props => props.theme.face_color_hover};
    }
    .navigate{
        transition: 1s;
        color: ${props => props.theme.primary_color};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`
const ContainerStyle = styled(Container)`
    margin-top: 7rem;
    color:${props => props.theme.text_color_header};
`

const ImageBIO = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
`
function Blog_header({title, type, date, image, children}) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/blog');
    };


    return (
        <ContainerStyle fixed sx={{marginTop:7}} >
            <Grid container spacing={2}>
                <Grid item xs={2} >
                    <ArrowBack >
                        <Button  sx={{borderRadius:'100px!important'}} onClick={handleRedirect}>
                            <ArrowBackIcon sx={{cursor:'pointer', color:'#3a228a', width:50, height:50}}/>
                        </Button>
                    </ArrowBack>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="h2" gutterBottom  sx={{ fontWeight: 'bold' }} >
                        {title}
                    </Typography>
                    <Typography gutterBottom  sx={{ fontWeight: 'bold' ,color:'#ff642e'}} >
                        {type}
                    </Typography>
                    <Box sx={{display: 'flex',alignItems: 'center',justifyContent:'left', gap:1}}>
                        <ImageBIO
                            src={require('../images/hello.jpeg')}
                            alt="Amirbek's picture"
                        />
                        <div>
                            <Typography  >
                                Amirbek Shomurodov
                            </Typography>
                            <Typography  variant="body2" sx={{color: '#605d5d'}}  >
                                {date}
                            </Typography>
                        </div>
                    </Box>
                    <Box sx={{marginTop: 3}}>
                        <img src={image} style={{width:"100%"}}/>
                    </Box>
                    <Styles>
                        <Box sx={{marginTop: 5, paddingRight: 6,}}>
                            {children}
                        </Box>
                    </Styles>
                </Grid>

            </Grid>
        </ContainerStyle>
    )
}
export default Blog_header;