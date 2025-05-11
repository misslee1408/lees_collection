function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if fields are filled
  if (!name || !email || !message) {
    alert("Please fill all the fields.");
    return;
  }

  var whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  var whatsappLink = `https://wa.me/+265992403398?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappLink, "_blank");
}
