import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('loginimg.jpg')", // Add your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Login
        </h2>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="exampleInputEmail1"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Email address
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
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div
            id="emailHelp"
            style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}
          >
            We'll never share your email with anyone else.
          </div>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="exampleInputPassword1"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Password
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
            id="exampleInputPassword1"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="checkbox"
            style={{ marginRight: "10px" }}
            id="exampleCheck1"
          />
          <label htmlFor="exampleCheck1" style={{ color: "#555" }}>
            Check me out
          </label>
        </div>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;