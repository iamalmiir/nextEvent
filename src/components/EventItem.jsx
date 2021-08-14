import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Link from 'next/link';
const EventItem = (props) => {
  const { title, date, location, image, id } = props;
  const prettyDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const prettyAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <Card sx={{ maxWidth: 345, margin: '2rem' }}>
      <CardMedia sx={{ height: 200 }} image={`/${image}`} title={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <strong>{title}</strong>
        </Typography>
        <Typography variant='subtitle1' component='div'>
          <Grid container>
            <TodayIcon style={{ marginRight: '0.5rem' }} />
            {prettyDate}
          </Grid>
        </Typography>
        <Divider />
        <Typography variant='body2' color='text.secondary'>
          <Grid container>
            <MyLocationIcon style={{ marginRight: '0.5rem' }} />
            <strong>{prettyAddress}</strong>
          </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={exploreLink} passHref>
          <Button
            variant='contained'
            style={{
              color: '#61DAFB',
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <strong>Explore Event</strong>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default EventItem;
