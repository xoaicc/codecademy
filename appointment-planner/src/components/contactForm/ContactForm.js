import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleChange = ({target}) => {
    switch (target.name) {
      case "name":
        return setName(target.value);
      case "phone":
        return setPhone(target.value);
      case "email":
        return setEmail(target.value);
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="tel" name="phone" pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" value={phone} onChange={handleChange} />
      <input type="email" name="email" value={email} onChange={handleChange} />
      <input type="submit" value="Add contact" />
    </form>
  );
};

