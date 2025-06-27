function addToCart(item) {
  alert(`${item} has been added to your cart!`);
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us. We'll get back to you soon!");
  this.reset();
});
