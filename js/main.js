document.querySelectorAll(".video-wrapper").forEach(wrapper => {
  const video = wrapper.querySelector("video");
  const playBtn = wrapper.querySelector(".play-btn");

  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "❚❚";
    } else {
      video.pause();
      playBtn.textContent = "▶";
    }
  });

  video.addEventListener("ended", () => {
    playBtn.textContent = "▶";
  });
});


const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animate);
  }

  animate();


  



//animated
AOS.init();
