import Particles from "react-tsparticles";

export default function Home3() {
  return (
    <div style={{ position: "relative", width: "100%", height: "650px", overflow: "hidden" }}>
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
            },
            color: {
          value: "#1445C2",
        },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1,
            },
            links: {
              enable: true,
              distance: 150,
              opacity: 0.4,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Yahan aap apna content daal sakte hain jo particles ke upar rahe */}
      <div style={{ position: "relative", zIndex: 1, padding: "20px", color: "#1445C2" }}>
        <h1>Yeh sirf 650px height ke andar particles section hai</h1>
        <p>Aapka koi bhi content yahan rahega.</p>
      </div>
    </div>
  );
}
