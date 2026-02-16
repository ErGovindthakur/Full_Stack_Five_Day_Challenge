import { useState } from "react";

const FormHandling = () => {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f0f2f5",
    },
    form: {
      width: "320px",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
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
    inline: {
      display: "flex",
      gap: "10px",
    },
    checkbox: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "12px",
    },
    button: {
      width: "100%",
      padding: "8px",
      border: "none",
      borderRadius: "4px",
      background: "#1877f2",
      color: "#fff",
      cursor: "pointer",
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Facebook Form</h2>

        {/* Name */}
        <div style={styles.field}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        {/* Email */}
        <div style={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div style={styles.field}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
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
        </div>

        {/* Country */}
        <div style={styles.field}>
          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
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

        {/* Submit */}
        <button
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

export default FormHandling;
