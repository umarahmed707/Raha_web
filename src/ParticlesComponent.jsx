
import Particles,  { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
   const [windowWidth, setWindowWidth] = useState(0);
   const [windowWidth1, setWindowWidth1] = useState(0);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const linksDistance = windowWidth < 768 ? 150 : 150;
 const linksDistance1 = windowWidth1 >= 1024 ? 40 : 220;

  
  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#1E2F97",
      //   },
      // },
      fullScreen: { enable: false }, 
      fpsLimit: 200,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 50,
            duration: 50,
          },
          grab: {
            distance: 110,
          },
        },
      },
      particles: {
        color: {
          value: "#1444C2",
        },
        links: {
          color: "#1445C2",
          distance: linksDistance,
          distance: linksDistance1,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.5,
          straight: true,
        },
        number: {
          density: {
            enable: false,
          },
          value: 200,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1 },
        },
      },
    
      detectRetina: true,
    }),
    [linksDistance,linksDistance1 ],
  );


  return  <Particles id={props.id} init={particlesLoaded} options={options} className="lg:h-[2500px] h-[4000px] " />;
   

};

export default ParticlesComponent;