import { getFeaturedEvents } from '../dummydb';
import EventList from '../src/components/EventList';

const Home = () => {
  const fEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={fEvents} />
    </div>
  );
};

export default Home;
