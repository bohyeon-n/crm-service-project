import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const myEventList = [];

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let Basic = ({ localizer }) => (
  <div style={{ height: "80vh" }}>
    <BigCalendar
      events={myEventList}
      startAccessor="startDate"
      endAccessor="endDate"
    />
  </div>
);

export default Basic;
