import { useState } from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import months from '../../months';

const CustomizedFormControl = (props) => {
  const [year, setYear] = useState('');

  const handleYear = (event) => {
    setYear(event.target.value);
  };
  const [month, setMonth] = useState('');
  const handleMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedYear = year;
    const selectedMonth = month;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <Box
      component='form'
      sx={{
        minWidth: 120,
        maxWidth: 300,
        padding: '2rem',
        margin: 'auto',
        textAlign: 'center',
        border: '1px solid #e3e5e8',
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant='h6' component='h1'>
        Filter Events
      </Typography>
      <FormControl fullWidth style={{ marginBottom: '1rem' }}>
        <InputLabel id='demo-simple-select-label'>Year</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          required
          value={year}
          label='Year'
          onChange={handleYear}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ marginBottom: '1rem' }}>
        <InputLabel id='month'>Month</InputLabel>
        <Select
          labelId='month'
          id='month'
          value={month}
          required
          label='Month'
          onChange={handleMonth}
        >
          {months.map((month) => (
            <MenuItem value={month.value} key={month.value}>
              {month.month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type='submit' fullWidth variant='outlined'>
        Find Event
      </Button>
    </Box>
  );
};

const EventSearch = (props) => {
  return <CustomizedFormControl onSearch={props.onSearch} />;
};

export default EventSearch;
