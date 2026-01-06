import { type User } from './types';
import './App.css'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

function App() {
  // const [count, setCount] = useState(0)

  // const [user, setUser] = useState<User | null>(null);

  // function handleLogin(loggingInUser: User) {
  // }

  function performLogout(loggedUser: User) {
    
  }

  return (
    <Box sx= {{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
            CVWO Forum
          </Typography>
          <Typography variant='body1' sx={{ mr: 2}}>
            Hello
          </Typography>
          <Button color='inherit' onClick={performLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default App
