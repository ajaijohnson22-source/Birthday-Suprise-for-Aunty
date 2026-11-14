
const giftBox = document.querySelector(".gift-box");

giftBox.addEventListener("click", function() {
    giftBox.classList.toggle("open");

    if (giftBox.classList.contains("open")) {
        createConfetti();
    }
});

function createConfetti() {
    const colors = [
        "#ffd700",
        "#ff69b4",
        "#ffffff",
        "#9b59b6",
        "#00d4ff"
    ];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 6000);
    }
}
