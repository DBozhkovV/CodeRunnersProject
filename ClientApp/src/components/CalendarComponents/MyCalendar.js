import React, { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import MyTable from "./MyTable";
// date.getDate() - vrushta datata - 22

const MyCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
    navigate("/table" + "?="+ date.getDate() + date.getMonth()+date.getYear());
  }
  


  console.log(date.getDate());
  return(
      <Calendar onChange={onChange} value={date} />
     
  );
}

export default MyCalendar;