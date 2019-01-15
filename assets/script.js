function mouseOver(picture) { // images modifiées
    document.getElementById(picture).src = "assets/img/" + picture + "_2.jpg";
}
function resetImg(picture) { // images par défaut
    document.getElementById(picture).src = "assets/img/" + picture + ".jpg";
}