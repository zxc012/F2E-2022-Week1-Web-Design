gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Block 1 動畫
const timeline1 = gsap.timeline();

timeline1.delay(0.5)
    .from('#block1-blue', { x: '-500%', duration: 0.5, ease: "back.out(1)" })
    .from('#block1-yellow', { x: '500%', duration: 0.5, ease: "back.out(1)" })
    .from('#block1-red', { x: '-500%', duration: 0.5, ease: "back.out(1)" })
    .from('#block1-green', { x: '500%', duration: 0.5, ease: "back.out(1)" })
    .from('#block1-logo', { y: '-600%', duration: 0.5, ease: "back.out(1.4)" })


// Block 2 動畫
gsap.utils.toArray(".animation-wrapper").forEach((element) => {
    if (element.classList.contains("block2")) {
        hide(element);

        ScrollTrigger.create({
            trigger: element,
            onEnter: function () {
                animated(element);
            },
            onEnterBack: function () {
                animated(element);
            },
            onLeave: function () {
                hide(element);
            },
        });
    }
});

function hide(element) {
    gsap.set(element, { opacity: 0, visibility: "hidden" });
}

function animated(element) {
    gsap.fromTo(element, { opacity: 0, visibility: "hidden" }, { delay: 0.5, duration: 1.5, visibility: "visible", opacity: "1" })
}

// Block 3 動畫
const timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#block3",
        toggleActions: "play pause resume reset",
    },
})

timeline2.from('#block3-magenta', { y: '-5000px', duration: 0.5, ease: "back.out(1.4)" })
    .from('#block3-black', { y: '-5000px', duration: 0.5, ease: "back.out(1.4)" }, "<")
    .from('#block3-red', { x: '-500%', duration: 0.5, ease: "back.out(1)" })
    .from('#block3-yellow', { x: '500%', duration: 0.5, ease: "back.out(1)" })


const timeline3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#block4",
        pin: true, //重要！ pin需設為true
        markers: true,
        scrub: true,
    },
});

timeline3.to("#block4-blue", { yPercent: "-150" }).to("#block4-red", { yPercent: "-150" }, "<").to("#block4-magenta", { yPercent: "-150" }, "<")