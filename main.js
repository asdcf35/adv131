function change(image, int, w, h){
  window.location = "assets/bedroom.html";
  localStorage.setItem("imageURL", image);
  localStorage.setItem("int", int);
  localStorage.setItem("w", w);
  localStorage.setItem("h", h);
}
