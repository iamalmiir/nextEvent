import { Grid, Box, Container } from '@material-ui/core';
import EventItem from './EventItem';
const EventList = (props) => {
  const { items } = props;
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {items.map((item) => (
        <Grid key={item.id} item xs={4} sm={4} md={4}>
          <EventItem
            key={item.id}
            title={item.title}
            date={item.date}
            location={item.location}
            image={item.image}
            id={item.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventList;
