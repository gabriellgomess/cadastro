import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const Home = () => {
    return (
        <div>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#121212', height: '90vh', padding: '50px'}} >
                <Typography variant="h4" gutterBottom>Home</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Em breve aqui teremos um dashboard com informações sobre o sistema.
                </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Home;