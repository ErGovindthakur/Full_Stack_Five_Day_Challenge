import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "", // type = "text"
    email: "", // type = "email"
    gender: "", // type = "radio"
    country: "", // type = "select"
    termsAndCondition: false, // type = "checkbox"
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data", formData);
  };
  return (
    <div>
      <h3>EPAM Form</h3>

      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Gender :</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
        <div>
          <label>Select Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <input
          type="checkbox"
          name="termsAndCondition"
          checked={formData.termsAndCondition}
          onChange={handleChange}
        />
        <button disabled={!formData.termsAndCondition} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
