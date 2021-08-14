import { getFeaturedEvents } from '../dummydb';
import { useRouter } from 'next/router';
import EventList from '../src/components/EventList';
import EventSearch from '../src/components/EventSearch';

const Home = () => {
  const router = useRouter();
  const events = getFeaturedEvents();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
};

export default Home;
