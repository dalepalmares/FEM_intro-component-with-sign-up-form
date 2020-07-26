const inputs = document.querySelectorAll(".input");
const errorMsgs = document.querySelectorAll(".error-msg");
const errorIcons = document.querySelectorAll(".error-icon");

function test() {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
}

function check() {
  if (inputs[0].value.length === 0) {
    errorMsgs[0].style.display = "block";
    errorIcons[0].style.display = "block";
  } else {
    errorMsgs[0].style.display = "none";
    errorIcons[0].style.display = "none";
  }

  if (inputs[1].value.length === 0) {
    errorMsgs[1].style.display = "block";
    errorIcons[1].style.display = "block";
  } else {
    errorMsgs[1].style.display = "none";
    errorIcons[1].style.display = "none";
  }

  if (inputs[2].value.length >= 1) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[2].value)) {
      errorMsgs[2].style.display = "none";
      errorIcons[2].style.display = "none";
      slide();
    } else {
      errorMsgs[2].style.display = "block";
      errorIcons[2].style.display = "block";
    }
  }

  if (inputs[3].value.length === 0) {
    errorMsgs[3].style.display = "block";
    errorIcons[3].style.display = "block";
  } else {
    errorMsgs[3].style.display = "none";
    errorIcons[3].style.display = "none";
  }
}
