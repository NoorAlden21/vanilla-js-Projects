const generateBtn = document.querySelector("button");
const input = document.querySelector("input");
const qrImg = document.getElementById("qrImg");
const imgBox = document.getElementById("imgBox");

function generateQrCode() {
  const text = input.value.trim();
  if (text === "") {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
    return;
  }
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  imgBox.classList.add("show-img");
}

generateBtn.addEventListener("click", generateQrCode);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQrCode();
  }
});
