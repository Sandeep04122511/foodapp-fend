import React from "react";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        backgroundImage: "url('loginimg.jpg')", // Add your background image path
        backgroundSize: "cover", // Cover the entire screen
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent image repetition
      }}
    >
      <form
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Register
        </h2>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Name:
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Email:
          </label>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Password:
          </label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            minLength="6"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="confirmPassword"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Confirm Password:
          </label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            minLength="6"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="phone"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Phone Number:
          </label>
          <input
            type="tel"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="address"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Address:
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="address"
            name="address"
            placeholder="Enter your address"
            required
          />
        </div>
        <div id="errorMessage" style={{ color: "red", marginBottom: "15px" }}></div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;