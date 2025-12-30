// 1. SET THE TARGET DATE
const countdownDate = new Date("Jan 1, 2026 00:00:00").getTime();

const timerFunc = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

    // If countdown is finished (or for testing, set distance < 0 manually)
    if (distance < 0) {
        clearInterval(timerFunc);
        document.getElementById("timer").innerHTML = "WELCOME 2026!";
        document.getElementById("reveal-btn").style.display = "inline-block";
    }
}, 1000);

// 2. REVEAL & PARTY POPPERS LOGIC
document.getElementById("reveal-btn").addEventListener("click", function() {
    // Start Music
    document.getElementById("bg-music").play();

    // PARTY POPPERS (Multiple Colors to stand out on yellow)
    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        // Colors: Vibrant Blue, Pink, White, and Deep Orange
        colors: ['#2980b9', '#e91e63', '#ffffff', '#8e44ad', '#ff5722'] 
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });

    // Transition Screens
    document.getElementById("countdown-container").style.display = "none";
    document.getElementById("greeting-container").classList.remove("hidden");

});
