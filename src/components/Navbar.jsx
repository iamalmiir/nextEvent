import AppBar from '@material-ui/core/AppBar';
import { cloneElement } from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import CustomLogo from '../../public/nextJS.svg';
import Link from 'next/link';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1, margin: 'auto', marginBottom: '5rem' }}>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar style={{ margin: 'auto' }}>
            <Link href='/' passHref>
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}
