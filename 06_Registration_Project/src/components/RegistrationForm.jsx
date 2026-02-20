import { useState } from "react";
import PreviewCard from "./PreviewCard";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    termsAndConditions: false,
  });

  const [sendData, setSendData] = useState({});

  const [errors, setError] = useState({});
  const [popup, setPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));

    // Explain why this one => important for immediately show error and while entering input hide errors
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const formValidation = () => {
    const newError = {};
    if (!formData.name) newError.name = "name is required";
    if (!formData.email) newError.email = "email is required";
    if (!formData.password) newError.password = "password is required";
    if (!formData.gender) newError.gender = "gender is required";
    if (!formData.country) newError.country = "country is required";
    if (!formData.termsAndConditions)
      newError.termsAndConditions = "terms and conditions is required";

    // setting error boundaries
    setError(newError);

    // actual stuff which prevent us while submitting the form
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValidation(``)) return;
    setSendData(formData);
    setPopup((prev) => !prev);
    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      country: "",
      termsAndConditions: false,
    });
    console.log("formData : ", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name*"
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="example@gmail.com*"
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password*"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        {/* Gender */}
        <div>
          <label htmlFor="gender">Gender : </label>
          Male:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Female:
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>
        {/* Country */}
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select your Country</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        {/* TermsAndConditions */}
        <div>
          <span>Terms and conditions : </span>
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleChange}
          />
          {errors.termsAndConditions && (
            <p style={{ color: "red" }}>{errors.termsAndConditions}</p>
          )}
        </div>
        <button disabled={!formData.termsAndConditions}>Submit</button>
      </form>

      <PreviewCard popup={popup} setPopup={setPopup} allData={sendData} />
    </div>
  );
};

export default RegistrationForm;
