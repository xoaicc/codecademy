import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="" selected>No Contact Selected</option>
      {contacts.map((contact, i) => <option key={i} value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
