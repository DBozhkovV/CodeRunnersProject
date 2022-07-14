import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
      <DatePicker 
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    );
};

export default DatePick;