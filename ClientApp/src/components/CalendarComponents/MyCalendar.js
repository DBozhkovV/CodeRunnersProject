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
    var datey = date.getYear() + 1900;
    navigate("/table" + "?="+ date.getDate() + date.getMonth() + datey);
    var myTableDate = date.getDate() + date.getMonth() + datey
    console.log(myTableDate);
  }
  

  return(
      <Calendar onChange={onChange} value={date} />
     
  );
}

export default MyCalendar;