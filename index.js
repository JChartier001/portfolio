// About Me modal
const modal = document.querySelector(".modal");
const btn = document.querySelector('.myBtn');
const close = document.getElementsByClassName("close")[0];

btn.addEventListener('click', () => {
  modal.style.display="block";
})
close.onclick = function() {
  modal.style.display = "none";
}

//See my work modal
const modalWork = document.querySelector(".modalWork");
const btnWork = document.querySelector('.myBtnWork');
const closeWork = document.getElementsByClassName("closeWork")[0];

btnWork.addEventListener('click', () => {
  modalWork.style.display="block";
})
closeWork.onclick = function() {
  modalWork.style.display = "none";
}

const modalContact = document.querySelector(".modalContact");
const btnContact = document.querySelector('.myBtnContact');
const closeContact = document.getElementsByClassName("closeContact")[0];

btnContact.addEventListener('click', () => {
  modalContact.style.display="block";
})
closeContact.onclick = function() {
  modalContact.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


