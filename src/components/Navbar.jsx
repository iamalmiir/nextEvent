import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import CustomLogo from '../../public/nextJS.svg';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/'>
            <Image src={CustomLogo} className='logoImg' alt='logo' />
          </Link>
          <Typography
            variant='h6'
            style={{ color: '#61DAFB' }}
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Event
          </Typography>
          <Button style={{ color: '#61DAFB' }}>
            <strong>Login</strong>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
