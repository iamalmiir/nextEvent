import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
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
      <CardMedia
        sx={{ height: 200 }}
        image={`/${image}`}
        title='Contemplative Reptile'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <strong>{title}</strong>
        </Typography>
        <Typography variant='subtitle1' component='div'>
          {prettyDate}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <strong>{prettyAddress}</strong>
        </Typography>
      </CardContent>
      <CardActions style={{ float: 'right' }}>
        <Button variant='contained' style={{ color: '#61DAFB' }}>
          <Link href={exploreLink} passHref>
            <strong>Explore Event</strong>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventItem;
