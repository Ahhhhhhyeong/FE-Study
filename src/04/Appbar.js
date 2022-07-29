import React from 'react';
import { alpha, styled } from '@mui/system';
import { 
    Box, 
    TextField,
    Toolbar, 
    AppBar,
    Typography,
    IconButton
} from '@mui/material';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor:  '#fcfcfb' ,
      
      '&:hover': {
        backgroundColor: '#fcfcfb',
      },    
      '&.Mui-focused': {
        backgroundColor: '#fcfcfb'
      }    
    },
  }));

  const MenuTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'right',
    paddingLeft: '10px',
  }));

export default function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <VaccinesIcon onClick={ () => console.log("click") } edge="start" color="inherit" aria-label='menu' sx={{ mr: 2 }}/>
                                    
                    <RedditTextField
                        label="Message"
                        id="reddit-input"
                        variant="filled"
                        sx = {{ width:'70%' }}
                    />
                    <Box
                     direction="column"
                     sx={{ flexGrow: 1 }}
                    >
                        <Box sx={{ display: { xs: 'none', alignSelf:'flex-start', md: 'flex', textAlign:'right' }}}>
                            <MenuTypography>
                                {"홍길동님"}
                            </MenuTypography>   
                            <MenuTypography>
                                {"회원정보수정"}
                            </MenuTypography>
                        </Box>
                        <Typography
                            noWrap
                            component='div'
                            fontSize='2em'
                            sx={{ flexGrow: 1, alignSelf: 'flex-end', textAlign:'right'}}
                        >
                            2022-07-28 17:28:00
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

