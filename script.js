const content = document.querySelector(".content");

const button = document.querySelector("#noBtn");
button.addEventListener("click", unclickable);

const yesButton = document.querySelector("#yesBtn");
yesButton.addEventListener("click", renderVideo);

function unclickable() {
  button.style.left = `${Math.ceil(Math.random() * 90)}%`;
  button.style.top = `${Math.ceil(Math.random() * 90)}%`;
}

function renderVideo() {
  const mainContent = document.querySelector(".main");
  const question = document.querySelector("#question");
  const buttons = document.querySelector(".buttons");

  question.style.display = "none";
  buttons.style.display = "none";

  const newContent = document.createElement("div");
  newContent.classList.add("new-content");

  mainContent.appendChild(newContent);

  const video = document.createElement("video");
  video.classList.add("myVideo");
  video.src = "valentine.MP4";
  video.play();
  video.style.height = "200px";
  video.style.width = "200px";

  newContent.appendChild(video);

  const startOver = document.querySelector("#start-over");
  startOver.addEventListener("click", () => {
    mainContent.removeChild(newContent);
    question.style.display = "block";
    buttons.style.display = "block";
  });
}
