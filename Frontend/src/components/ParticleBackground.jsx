import { useEffect } from "react";
// import { loadFull } from "tsparticles"; // alternative if you want react wrapper
// import particlesJS from "particles.js";

const ParticleBackground = () => {
  useEffect(() => {
    particlesJS.load("particles-js", "/particles.json", function () {
      console.log("particles.js config loaded");
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
        // background: "linear-gradient(to right, #b2dfdb, #e0cfc1, #ececec)"/
                backgroundColor: "#000000" // or just: background: "black"













      }}
    ></div>
  );
};

export default ParticleBackground;
