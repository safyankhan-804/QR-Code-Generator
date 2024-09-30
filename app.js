const qrForm = document.getElementById("qrForm");
const qrImage = document.getElementById("qrImage");
const qrContainer = document.getElementById("qrContainer");
const qrInputText = document.getElementById("qrInputText");
const generateBtn = document.getElementById("generateBtn");

const renderQRCode = (url) => {
  if (!url) return;

  generateBtn.innerText = "Generating Qr Code...";
  qrImage.src = url;

  const onImageLoad = () => {
    setTimeout(() => {
      qrContainer.classList.add("show");
      generateBtn.innerText = "Generate QR Code";
    }, 500);
  };

  qrImage.removeEventListener("load", onImageLoad);
  qrImage.addEventListener("load", onImageLoad);
};

qrForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(qrForm);
  const text = formData.get("qrText").trim();

  if (!text) {
    qrContainer.classList.remove("show");
    return;
  }

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  renderQRCode(qrCodeUrl);
});

qrInputText.addEventListener("keyup", () => {
  if (!qrInputText.value.trim()) {
    qrContainer.classList.remove("show");
  }
});
