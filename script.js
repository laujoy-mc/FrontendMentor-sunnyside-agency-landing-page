function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



function headerAnimation() {
    var ml1textWrapper = document.querySelector('.ml1 .letters');
    ml1textWrapper.innerHTML = ml1textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.ml1 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1)
        })

}

function sectionAnimation() {
    var ml12TextWrapper = document.querySelector('.ml12');
    ml12TextWrapper.innerHTML = ml12TextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.ml12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: (el, i) => 500 + 30 * i
        });
}


// navbar

window.addEventListener("scroll", function() {

    // nav
    let navArea = document.getElementById("sunnysideNav");

    if (window.pageYOffset > 0) {
        navArea.classList.add("bg-dark");
    } else {
        navArea.classList.remove("bg-dark");
    }

    // // ml1 animation
    // let ml1 = document.getElementsByClassName('ml1');
    // console.log(ml1);
    // [...ml1].forEach(el => {
    //     if (isInViewport(el)) {
    //         headerAnimation();
    //     }
    // })

    // // ml12 animation
    // let ml12 = document.getElementsByClassName('ml12');
    // [...ml12].forEach(el => {
    //     if (isInViewport(el)) {
    //         // sectionAnimation();
    //     }
    // })
});