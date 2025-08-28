gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#scroll-wrapper"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#scroll-wrapper", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector("#scroll-wrapper").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var tl = gsap.timeline();

tl.from("#intro h1", {
  y: 50,
  duration: 0.5,
  opacity: 0,
  delay: 1,
});
tl.from("#intro h2", {
  y: 50,
  duration: 1,
  opacity: 0,
});
tl.from("#intro h5", {
  y: 50,
  duration: 1,
  opacity: 0,
});

function intro2() {
  gsap.to("#intro2 #img1, #img3, #img5, #img7", {
    y: "-90%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#intro2 #img1",
      scroller: "#scroll-wrapper",
      start: "top 10%",
      end: "top -10%",
      scrub: 2,
    },
  });
  gsap.to("#intro2 #img2, #img4, #img6", {
    y: "90%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#intro2 #img1",
      scroller: "#scroll-wrapper",
      start: "top 10%",
      end: "top 0%",
      scrub: 2,
    },
  });
}
function page1() {
  gsap.from("#p1-left", {
    y: "50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from("#p1-rcontent", {
    y: "-50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
function page2() {
  gsap.from("#p2-left", {
    y: "-50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from("#p2-right", {
    y: "50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
function page3() {
  gsap.from("#p3-left", {
    y: "-50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from("#p3-right", {
    y: "50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
function page4() {
  gsap.from("#p4-left", {
    x: "50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
function page5() {
  gsap.from("#p5-right", {
    x: "-50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
function page6() {
  gsap.from("#p6-left", {
    width: "0%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  }); 
    gsap.from("#p6-right", {
      width: "100%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#scroll-wrapper",
        start: "top 30%",
        end: "top 10%",
        scrub: 2,
      },
    });
  }

function page7() {
  gsap.from("#p7-left", {
    x:"-50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  })
    gsap.from("#p7-right", {
      x:"50%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page7",
        scroller: "#scroll-wrapper",
        start: "top 30%",
        end: "top 10%",
        scrub: 2,
      },
    });
}
function page8() {
  gsap.from("#p8-left", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from("#p8-right", {
    y: "50%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
function page9() {
  gsap.to("#p9-left", {
    width:"20%",
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.to("#p9-left h1", {
    transform:"Rotate(-90deg)",
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.to("#p9-right", {
    width:"80%",
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#scroll-wrapper",
      start: "top 30%",
      end: "top 10%",
      scrub: 2,
    },
  });
}
intro2();
page1();
page2();
page3();
page4();
page5();
page6();
page7();
page8();
page9();