

export const getTsObject = (theme) => ({
  background: {
    color: { 
      value: theme === 'light' ? 'transparent' : '#121212' 
    },
  },
  fpsLimit: 120,
  fullScreen: { enable: true },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: theme === 'light' ? "#000000" : "#ffffff" }, 
    links: {
      color: theme === 'light' ? "#000000" : "#ffffff", 
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: { enable: true, speed: 2, outModes: { default: "out" } },
    number: { density: { enable: true }, value: 80 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
});
