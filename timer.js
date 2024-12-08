(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Dec 07, 2024 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      // Update the countdown
      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );

      // If the countdown reaches zero
      if (distance < 0) {
        const headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "It's December 21st!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);

        // Trigger balloons animation
        createBalloons();
      }
    }, 1000);

  function createBalloons() {
    const body = document.body;

    for (let i = 0; i < 20; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");

      // random position and color
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.animationDuration = Math.random() * 2 + 3 + "s";
      balloon.style.backgroundColor = getRandomColor();

      body.appendChild(balloon);

      balloon.addEventListener("animationend", () => {
        balloon.remove();
      });
    }
  }
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
})();
