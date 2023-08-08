import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleChange = ({target}) => {
    switch (target.name) {
      case "name":
        return setName(target.value);
      case "date":
        return setDate(target.value);
      case "time":
        return setTime(target.value);
      case "contact":
        return setContact(target.value);
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="date" name="date" value={date} onChange={handleChange} min={getTodayString()} />
      <input type="time" name="time" value={time} onChange={handleChange} />
      <ContactPicker contacts={contacts} name="contact" value={contact} onChange={handleChange} />
      <input type="submit" value="Add appointment" />
    </form>
  );
};
