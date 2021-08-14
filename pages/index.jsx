import { getFeaturedEvents } from '../dummydb';
import EventList from '../src/components/EventList';
import EventSearch from '../src/components/EventSearch';

const Home = () => {
  const fEvents = getFeaturedEvents();
  return (
    <div>
      <EventSearch />
      <EventList items={fEvents} />
    </div>
  );
};

export default Home;
