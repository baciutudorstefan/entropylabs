gsap.registerPlugin(ScrollTrigger);

gsap.to(".leftSide", {
  duration: 1,
  x: "-30vw",
  scrollTrigger: {
    trigger: ".leftSide",
    markers: true,
    start: "top center",
    end: "bottom 100px",

    toggleActions: "play pause resume reverse",
  },
});

gsap.to(".rightSide", {
  duration: 1,
  x: "30vw",
  scrollTrigger: {
    trigger: ".rightSide",
    markers: true,
    start: "top center",
    end: "bottom 100px",

    toggleActions: "play pause resume reverse",
  },
});

gsap.to(".object", {
  duration: 1.5,

  scale: 1,
  scrollTrigger: {
    trigger: ".object",
    markers: true,
    start: "top center",
    end: "bottom 100px",
    rotate: 360,
    toggleActions: "play pause resume reverse",
  },
});

gsap.to(".beamLight", {
  duration: 0.4,
  ease: "power2.inOut",
  scale: 1,
  scrollTrigger: {
    trigger: ".beamLight",
    markers: true,
    start: "+=50 center",
    end: "+=200",
    toggleActions: "play pause resume reverse",
    stagger: {
      amount: 0.5,
      grid: [15, 1],
      from: 0,
      axis: "y",
    },
  },
});

gsap.to(".objectGettingLive", {
  duration: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".objectGettingLive",
    markers: true,
    start: "top center",
    end: "bottom 10px",

    toggleActions: "play pause resume reverse",
  },
});

gsap.to(".objectAlive", {
  duration: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".objectAlive",
    markers: true,
    start: "top center",
    end: "bottom 10px",

    toggleActions: "play pause resume reverse",
  },
});

gsap.to(".buttefly", {
  duration: 1,
  scale: 1,
  scrollTrigger: {
    trigger: ".buttefly",
    markers: true,
    start: "top center",
    end: "bottom 10px",

    toggleActions: "play pause resume reverse",
  },
});
