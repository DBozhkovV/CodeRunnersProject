import React, { useState } from "react";
import Calendar from "react-calendar";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 1095258a8c18437913c99dd29954ef46524bd093
import MyTable from "./MyTable";
// date.getDate() - vrushta datata - 22

const MyCalendar = () => {
<<<<<<< HEAD
=======
  const navigate = useNavigate();
>>>>>>> 1095258a8c18437913c99dd29954ef46524bd093
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
<<<<<<< HEAD
  }

  return(
    <div>
      <Calendar onChange={onChange} onClickDay={<MyTable/>} value={date}/>
    </div>
=======
    navigate("/table" + "?="+ date.getDate() + date.getMonth()+date.getYear());
  }
  


  console.log(date.getDate());
  return(
      <Calendar onChange={onChange} value={date} />
     
>>>>>>> 1095258a8c18437913c99dd29954ef46524bd093
  );
}

export default MyCalendar;