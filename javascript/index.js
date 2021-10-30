/*------------   READ MORE TOGGLE BUTTON  --------------*/
let noOfCharac = 771;
let aboutMessages = document.querySelectorAll(".aboutMessage");

aboutMessages.forEach((aboutMessage) => {
  //if text is more than noOfCharac ( no of characters),
  // hide read more button.
  if (aboutMessage.textContent.length < noOfCharac) {
    aboutMessage.nextElementSibling.style.display = "none";
  } else {
    //else display text with button,
    //and slice the text.
    let displayText = aboutMessage.textContent.slice(0, noOfCharac);
    let moreText = aboutMessage.textContent.slice(noOfCharac);
    aboutMessage.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});
//toggle between "Read More" and "Read Less" button.
function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");

  btn.textContent == "Read Less"
    ? (btn.textContent = "Read More")
    : (btn.textContent = "Read Less");
}
/*------------------- READ MORE TOGGLE BUTTON END -----------*/
