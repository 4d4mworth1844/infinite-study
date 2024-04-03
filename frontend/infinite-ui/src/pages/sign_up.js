/**
 * Sign up page
 */
import * as React from 'react';
import { Box, Link } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
        backgroundColor: green[700],
    },
}));


export default function SignUpWidget() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{
                    bgcolor: '#F5F0F0',
                    height: '85vh',
                    padding: '1rem',
                    borderRadius: '10px',
                    marginTop: '1rem',
                    boxShadow: "5px 5px",
                }}>
                    <Box
                        sx={{
                            margin: "1rem"
                        }}
                    >
                        <div className='SignUpTitle'>
                            <Typography align="center" variant='h4'><b>Sign up</b></Typography>
                        </div>
                    </Box>

                    <Box
                        sx={{
                            justifyContent: "center",
                            padding: '1rem',
                        }}
                    >
                        <FormControl fullWidth
                            sx={{ mb: 4 }}
                        >
                            <FormLabel sx={{ color: 'black', fontWeight: '750', p: '100' }}>Username</FormLabel>
                            <TextField sx={{ bgcolor: "white", borderRadius: '10px', boxShadow: "2px 2px" }} fullWidth id="fullWidth" />
                        </FormControl>


                        <FormControl fullWidth
                            sx={{ mb: 4 }}
                        >
                            <FormLabel sx={{ color: 'black', fontWeight: '750', p: '100' }}>Password</FormLabel>
                            <TextField sx={{ bgcolor: "white", borderRadius: '10px', boxShadow: "2px 2px" }} fullWidth id="fullWidth" />
                        </FormControl>

                        <FormControl fullWidth
                            sx={{ mb: 3 }}
                        >
                            <FormLabel sx={{ color: 'black', fontWeight: '750', p: '100' }}>Email</FormLabel>
                            <TextField sx={{ bgcolor: "white", borderRadius: '10px', boxShadow: "2px 2px" }} fullWidth id="fullWidth" />
                        </FormControl>

                        <Box
                            sx={{
                                justifyContent: "center",
                            }}
                        >
                            <Typography align="center" variant='h6'>already have an <Link href="#"><b>Account</b></Link> ? </Typography>
                        </Box>

                    </Box>
                    <Box
                        sx=
                        {{
                            align: 'center',
                            justifyContent: "center",
                        }}
                    >
                        <Typography align='center'>
                            <ColorButton sx={{ align: 'center', borderRadius: "10px", boxShadow: "2px 2px"}} variant="contained" size="large">Sign Up
                            </ColorButton>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}