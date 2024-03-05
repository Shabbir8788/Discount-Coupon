function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

function calculateDiscount(originalPrice, discountPercentage) {
  return originalPrice - originalPrice * (discountPercentage / 100);
}

document.getElementById("add-btn").addEventListener("click", function () {
  const addPrice = getInputValueById("price-field");
  const previousPriceTotal = getTextElementValueById("price-total");

  const currentPrice = previousPriceTotal + addPrice;
  setTextElementValueById("price-total", currentPrice);
});

document.getElementById("btn-discount").addEventListener("click", function () {
  const discountCoupon = document.getElementById("coupon-code");
  if (discountCoupon.value === "DISC30") {
    const currentTotal = getTextElementValueById("price-total");
    const discountPrice = calculateDiscount(currentTotal, 30);
    setTextElementValueById("pay-total", discountPrice);
  } else {
    alert("Invalid Discount Coupon");
  }
});
