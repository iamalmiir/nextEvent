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
  return (
    <Box
      sx={{
        minWidth: 120,
        maxWidth: 300,
        padding: '2rem',
        // backgroundColor: 'rgba(53, 63, 79, 0.7)',
        margin: 'auto',
        textAlign: 'center',
        border: '1px solid #e3e5e8',
      }}
    >
      <Typography variant='h6' component='h1'>
        Filter Events
      </Typography>
      <FormControl fullWidth style={{ marginBottom: '1rem' }}>
        <InputLabel id='demo-simple-select-label'>Year</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={props.year}
          label='Year'
          //   onChange={handleChange}
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
          value={props.month}
          label='Month'
          //   onChange={handleChange}
        >
          {months.map((month) => (
            <MenuItem value={month.value} key={month.value}>
              {month.month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button fullWidth variant='outlined'>
        Find Event
      </Button>
    </Box>
  );
};

const EventSearch = () => {
  return <CustomizedFormControl />;
};

export default EventSearch;
