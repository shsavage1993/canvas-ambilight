window.addEventListener("load", () => {
  const player = document.getElementById("video-player");
  const playerWidth = player.clientWidth;
  const playerHeight = player.clientHeight;

  const canvas = document.getElementById("canvas-ambilight");
  const ctx = canvas.getContext("2d");
  canvas.width = playerWidth;
  canvas.height = playerHeight;

  const video = document.getElementById("video");
  const poster = document.getElementById("video-poster");
  ctx.drawImage(poster, 0, 0, playerWidth, playerHeight);

  var active;
  function animate() {
    requestAnimationFrame(animate);
    if (active) {
      ctx.clearRect(0, 0, playerWidth, playerHeight);
      ctx.drawImage(video, 0, 0, playerWidth, playerHeight);
    }
  }
  animate();

  function handlePlay() {
    active = true;
  }
  function handlePause() {
    active = false;
  }
  video.addEventListener("play", handlePlay);
  video.addEventListener("pause", handlePause);
  video.addEventListener("ended", handlePause);

  // video.addEventListener("play", function () {
  //   timer = window.setInterval(function () {
  //     ctx.drawImage(video, 0, 0, playerWidth, playerHeight);
  //   }, 30); // .. every 30 milliseconds
  // });
  // video.addEventListener(
  //   "pause",
  //   function () {
  //     window.clearInterval(timer);
  //   }
  // );
  // video.addEventListener(
  //   "ended",
  //   function () {
  //     window.clearInterval(timer);
  //   }
  // );
});
