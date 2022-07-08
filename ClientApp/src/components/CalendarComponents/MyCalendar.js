import React, { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

// date.getDate() - vrushta datata - 22

const MyCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
    var dated = date.getDate();
    var datey = date.getYear() + 1900;
    var datem = date.getMonth() + 1;
    if(dated < 10){
      dated = '0' + dated;
    }
    if(datem < 10){
      datem = '0' + datem;
    }
    navigate("/table/" + datem + '-' + dated + '-' + datey);
  }
  

  return(
      <Calendar onChange={onChange} value={date} />
     
  );
}

export default MyCalendar;