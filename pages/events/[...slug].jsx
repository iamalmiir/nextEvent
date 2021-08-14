import { useRouter } from 'next/router';

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

  console.log(filterData);
  return (
    <div>
      <h1>Filtered events</h1>
    </div>
  );
};

export default FilteredEvents;
