var modal = document.getElementById("modal");
var mainImage = document.getElementById("mainImage");
var closeModal = document.querySelector(".close");

mainImage.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}
