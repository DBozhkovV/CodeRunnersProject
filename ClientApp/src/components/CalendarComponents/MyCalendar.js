import React, { useState } from "react";
import Calendar from "react-calendar";
import MyTable from "./MyTable";
// date.getDate() - vrushta datata - 22

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return(
    <div>
      <Calendar onChange={onChange} onClickDay={<MyTable/>} value={date}/>
    </div>
  );
}

export default MyCalendar;