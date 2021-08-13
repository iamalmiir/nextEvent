import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummydb';
import EventItem from '../../src/components/EventItem';

const EventItemId = (props) => {
  const router = useRouter();
  const getEventId = router.query.id;
  const sEvent = getEventById(getEventId);
  console.log(sEvent);
  if (sEvent) {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <EventItem
            title={sEvent.title}
            date={sEvent.date}
            location={sEvent.location}
            image={sEvent.image}
          />
        </Grid>
      </Grid>
    );
  }
  return (
    <div>
      <h1>Nothing here</h1>
    </div>
  );
};

export default EventItemId;
