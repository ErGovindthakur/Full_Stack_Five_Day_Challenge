import { useState } from "react";

const FormHandling2 = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     //  background: "#f0f2f5",
    },
    form: {
      width: "340px",
      padding: "20px",
     //  background: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "15px",
    },
    field: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "12px",
    },
    input: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      outline: "none",
    },
    inline: {
      display: "flex",
      gap: "12px",
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "10px",
    },
    button: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      background: "#1877f2",
      color: "#fff",
      cursor: "pointer",
      marginTop: "10px",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginTop: "4px",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    termsAndConditions: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
    // Explain why this one => important for immediately show error and while entering input hide errors
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.termsAndConditions)
      newErrors.termsAndConditions = "You must accept terms";

    setErrors(newErrors);
    // this is the actual stuff which prevent us while submitting form
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form Submitted:", formData);
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>My Form</h2>

        {/* Name */}
        <div style={styles.field}>
          <label>Name</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div style={styles.field}>
          <label>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        {/* Password */}
        <div style={styles.field}>
          <label>Password</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={styles.error}>{errors.password}</span>
          )}
        </div>

        {/* Gender */}
        <div style={styles.field}>
          <label>Gender</label>
          <div style={styles.inline}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
          {errors.gender && <span style={styles.error}>{errors.gender}</span>}
        </div>

        {/* Country */}
        <div style={styles.field}>
          <label>Country</label>
          <select
            style={styles.input}
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
          {errors.country && <span style={styles.error}>{errors.country}</span>}
        </div>

        {/* Terms */}
        <div style={styles.checkbox}>
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleChange}
          />
          <span>I accept Terms & Conditions</span>
        </div>
        {errors.termsAndConditions && (
          <span style={styles.error}>{errors.termsAndConditions}</span>
        )}

        <button
          type="submit"
          style={{
            ...styles.button,
            opacity: formData.termsAndConditions ? 1 : 0.5,
          }}
          disabled={!formData.termsAndConditions}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling2;
