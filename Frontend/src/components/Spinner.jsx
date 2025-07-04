import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <section
      style={{
        minHeight: "525px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000", // Optional: Dark background
      }}
    >
      <ClipLoader size={150} color="#ffffff" />
      <p
        style={{
          marginTop: "20px",
          color: "#ffffff",
          fontSize: "18px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Please refresh this page
      </p>
    </section>
  );
};

export default Spinner;
