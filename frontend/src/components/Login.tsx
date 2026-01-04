import React, { useState, type FormEvent } from 'react';
import { Box, Button, TextField, Container, Paper, Typography } from '@mui/material';


function Login() {
    const [username, setUsername] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

    }

    return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Welcome to Forum
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            Enter a username to join the discussion
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;