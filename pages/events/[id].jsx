import {
  Grid,
  Typography,
  ButtonBase,
  Paper,
  Divider,
  Button,
} from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummydb';
import Link from 'next/link';
import EventItem from '../../src/components/EventItem';
import Image from 'next/image';

const EventItemId = (props) => {
  const router = useRouter();
  const getEventId = router.query.id;
  const sEvent = getEventById(getEventId);
  if (sEvent) {
    const prettyDate = new Date(sEvent.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const prettyAddress = sEvent.location.replace(', ', '\n');
    return (
      <Paper
        sx={{
          p: 1,
          margin: 'auto',
          marginTop: '2rem',
          maxWidth: 900,
          flexGrow: 1,
        }}
      >
        <Button
          variant='contained'
          style={{ marginBottom: '0.5rem', color: '#61DAFB  ' }}
        >
          <Link href='/' style={{ color: 'buttoncolor' }}>
            Go Back
          </Link>
        </Button>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item>
            <ButtonBase
              sx={{ width: { xs: 400, sm: 600, md: 880 }, height: 400 }}
            >
              <Image
                src={`/${sEvent.image}`}
                layout='fill'
                alt={sEvent.title}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='h3' component='div'>
                  {sEvent.title}
                </Typography>
                <Typography variant='h5' gutterBottom>
                  <Grid container>
                    <TodayIcon
                      style={{ marginRight: '0.5rem', marginTop: '0.3rem' }}
                    />
                    <strong>{prettyDate}</strong>
                  </Grid>
                </Typography>
                <Divider />
                <Typography variant='h5' gutterBottom>
                  <Grid container>
                    <MyLocationIcon
                      style={{ marginRight: '0.5rem', marginTop: '0.3rem' }}
                    />
                    <e>{prettyAddress}</e>
                  </Grid>
                </Typography>
                <Typography
                  variant='h6'
                  color='text.secondary'
                  style={{ marginTop: '3rem' }}
                >
                  {sEvent.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    cursor: 'pointer',
                    float: 'right',
                    color: '#e91e63',
                  }}
                  variant='body2'
                >
                  Remove
                </Typography>
                <Typography
                  variant='body2'
                  color='secondary'
                  style={{ float: 'left' }}
                >
                  ID: {sEvent.id}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' component='div'>
                {sEvent.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  return (
    <div>
      <h1>Nothing here</h1>
    </div>
  );
};

export default EventItemId;

// <Grid
// container
// spacing={{ xs: 2, md: 2 }}
// columns={{ xs: 4, sm: 8, md: 12 }}
// >
// <Grid item xs={4} sm={4} md={4}>
//   <EventItem
//     title={sEvent.title}
//     date={sEvent.date}
//     location={sEvent.location}
//     image={sEvent.image}
//   />
// </Grid>
// </Grid>
