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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeleteIcon from '@material-ui/icons/Delete';
import { getEventById } from '../../dummydb';
import Link from 'next/link';
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
        <Link href='/' passHref style={{ color: 'buttoncolor' }}>
          <Button
            variant='contained'
            startIcon={<ArrowBackIosIcon />}
            style={{ marginBottom: '0.5rem', color: '#61DAFB  ' }}
          >
            Go Back
          </Button>
        </Link>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          sx={{ width: { xs: 400, sm: 600, md: 880 }, height: 410 }}
        >
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
                <Typography gutterBottom variant='h3' component='h1'>
                  {sEvent.title}
                </Typography>
                <Typography variant='div' gutterBottom>
                  <Grid container>
                    <TodayIcon
                      style={{ marginRight: '0.5rem', marginTop: '0.3rem' }}
                    />
                    <strong>{prettyDate}</strong>
                  </Grid>
                </Typography>
                <Divider />
                <Typography variant='div' gutterBottom>
                  <Grid container>
                    <MyLocationIcon style={{ marginRight: '0.5rem' }} />
                    <em>{prettyAddress}</em>
                  </Grid>
                </Typography>
                <Typography
                  variant='div'
                  color='text.secondary'
                  style={{ marginTop: '3rem' }}
                >
                  {sEvent.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  color='secondary'
                  style={{ float: 'left' }}
                >
                  ID: {sEvent.id}
                </Typography>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant='subtitle1' component='div'>
                {sEvent.price}
              </Typography>
            </Grid> */}
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
