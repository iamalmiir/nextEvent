import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummydb';
import EventList from '../../src/components/EventList';

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return (
      <div>
        <h1>Nothing here...</h1>
      </div>
    );
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];
  const numYear = +filterYear;
  const numMonth = +filterMonth;
  console.log(numYear, numMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    console.log(numYear, numMonth);
    return (
      <div>
        <h1>Nothing here...</h1>
      </div>
    );
  }
  const askedEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!askedEvents || askedEvents.length === 0) {
    console.log(askedEvents);
    return (
      <div>
        <h1>Nothing here...</h1>
      </div>
    );
  }

  console.log(askedEvents);
  return (
    <div>
      <EventList items={askedEvents} />
    </div>
  );
};

export default FilteredEvents;
