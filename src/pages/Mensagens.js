import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
const Mensagens = () => {
    return (
        <div>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#121212', height: '90vh', padding: '50px'}} >
                <Typography variant="h4" gutterBottom>Mensagens</Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Em breve teremos aqui o envio de mensagens para os usuários.
                </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default Mensagens