import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#0d47a1", // Background color (optional)
            },
          },
          particles: {
            number: {
              value: 100, // Number of particles
            },
            shape: {
              type: "circle", // Shape of the particles
            },
            size: {
              value: 3, // Size of the particles
            },
            move: {
              speed: 2, // Speed of particle movement
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
