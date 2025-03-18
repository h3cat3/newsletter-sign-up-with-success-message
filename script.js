const email = document.getElementById("email");
const send = document.getElementById("button");
const errorMsg = document.getElementById("error");
const modal = document.getElementById("my-modal")

send.addEventListener('click',(ev) => {
  ev.preventDefault();

  const isValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  if (email.value.trim() !== "" && isValid(email.value)) {
    //open modal
    modal.style.display = "flex";
  } else {
    //error state, red border and background color, and message
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "rgba(255, 97, 85, 0.15)";
    email.style.color = "hsl(4, 100%, 67%)";
    errorMsg.innerText = "Valid email required";
  }
})
//dismiss button to clese the modal
const dismiss = document.getElementById("dismiss-btn");
dismiss.addEventListener('click',() => {
  modal.style.display = "none";
})
// Reset color when user starts typing
email.addEventListener('focus', () =>{
  email.style.borderColor = "hsl(231, 7%, 60%)";
  email.style.backgroundColor = "hsl(0, 0%, 100%)";
  email.style.color = "hsl(234, 29%, 20%)";
  errorMsg.innerText = "";
})
