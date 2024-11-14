const buttona = document.getElementById("letter_button_a");
const buttonb = document.getElementById("letter_button_b");
const buttonc = document.getElementById("letter_button_c");
const imagea = document.getElementById("imagea");
const imageb = document.getElementById("imageb");
const imagec = document.getElementById("imagec");
const hidea = document.getElementById("hide_button_a");
const hideb = document.getElementById("hide_button_b");
const hidec = document.getElementById("hide_button_c");

function onletterbuttonclick(button, image) {
  button.addEventListener("click", function () {
    image.style.display = "block";
  });
}

function hidebtn(button, image) {
  button.addEventListener("click", function () {
    image.style.display = "none";
  });
}

// Initially hide all images
imagea.style.display = "none";
imageb.style.display = "none";
imagec.style.display = "none";

onletterbuttonclick(buttona, imagea);
onletterbuttonclick(buttonb, imageb);
onletterbuttonclick(buttonc, imagec);

hidebtn(hidea, imagea);
hidebtn(hideb, imageb);
hidebtn(hidec, imagec);
