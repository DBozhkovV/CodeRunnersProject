import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import dateFormat from 'dateformat';

const DatePick = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [picked, setPicked] = useState(false);
    const token = localStorage.getItem("token");
    const [numberOfBooking, setNumberOfBooking] = useState();
  
    let dateStart = dateFormat(startDate, "yyyy-mm-dd");
    let dateEnd = dateFormat(endDate, "yyyy-mm-dd");
    
    let date4= new Date(startDate).toLocaleDateString('en-US', {
      month: '2-digit',day: '2-digit',year: 'numeric'})
      
    const GetNumberOfBookings = async () => {
      axios.get(`https://localhost:7031/Register/${dateStart}?end=${dateEnd}`, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
          setNumberOfBooking(response.data);
        })
        .catch(error => {
              console.log(error)
        })
    }

    if(picked){
      GetNumberOfBookings();
    }

    return (
      <div>
      <DatePicker 
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
          setPicked(true);
        }}
        isClearable={true}
      />
      <div>
        <hr></hr>
        <span>{numberOfBooking}</span>
      </div>
      </div>
    );
};

export default DatePick;