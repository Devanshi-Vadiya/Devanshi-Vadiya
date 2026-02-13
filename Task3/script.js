gsap.registerPlugin(ScrollTrigger);

/* Master timeline controlled by scroll distance */
let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".monster-section",
    start:"top top",

    // VERY IMPORTANT (this is why your animation stopped before)
    end:"+=6000",

    scrub:1.5,
    pin:true,
    anticipatePin:1
  }
});

/* Title fades in */
tl.to(".title",{
  opacity:1,
  duration:1
});

/* ---- FAR → NEAR ---- */
tl.to(".can",{
  scale:0.8,
  duration:3,
  ease:"power2.out"
});

tl.to(".lid",{
  scale:0.8,
  duration:3,
  ease:"power2.out"
},"<");

/* ---- ZOOM ---- */
tl.to(".can",{
  scale:1.5,
  duration:3,
  ease:"power3.out"
});

tl.to(".lid",{
  scale:1.5,
  duration:3,
  ease:"power3.out"
},"<");

/* ---- EXTRA CLOSE ---- */
tl.to(".can",{
  scale:1.9,
  duration:2
});

tl.to(".lid",{
  scale:1.9,
  duration:2
},"<");

/* ---- LID OPENS ---- */
tl.to(".lid",{
  y:-260,
  rotation:-55,
  duration:2,
  ease:"back.out(1.7)"
});

/* ---- DRINK RISES ---- */
tl.to(".drink",{
  opacity:1,
  y:-60,
  scale:1.6,
  duration:2,
  ease:"power2.out"
});
