// Redirect to another page on form submission
document.getElementById("paymentForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  const cardHolderName = document.getElementById("Card-Holder").value.trim();
  const cardNumber = document.getElementById("Card-Number").value.trim();
  const expiryDate = document.getElementById("Expiry-Date").value.trim();
  const cvv = document.getElementById("CVV").value.trim();

  // Validate if all inputs are filled
  if (!cardHolderName || !cardNumber || !expiryDate || !cvv) {
    alert("Please fill in all required fields.");
    return;
  }

  // Redirect to the success page
  window.location.href = "sucess.html"; // Replace 'success.html' with your desired page
  
});


// Automatically format the card number as 1234-1234-1234-1234
const cardNumberInput = document.getElementById("Card-Number");
cardNumberInput.addEventListener("input", function (e) {
  let value = this.value.replace(/\D/g, ""); // Remove all non-numeric characters
  value = value.match(/.{1,4}/g)?.join("-") || ""; // Group into chunks of 4 and join with dashes
  this.value = value;
});

// Automatically format the Expiry Date as MM/YY
const expiryDateInput = document.getElementById("Expiry-Date");
expiryDateInput.addEventListener("input", function (e) {
  let value = this.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  if (value.length > 4) value = value.slice(0, 4); // Restrict to 4 digits
  if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`; // Add "/" after 2 digits
  this.value = value;
}
);
