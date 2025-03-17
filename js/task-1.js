function purchaseDroids(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  }

  return You ordered ${quantity} droids worth ${totalPrice} credits!;
}

// Перевірка функції
console.log(purchaseDroids(5, 300, 2000)); // "You ordered 5 droids worth 1500 credits!"
console.log(purchaseDroids(3, 500, 1000)); // "Insufficient funds!"
console.log(purchaseDroids(2, 400, 1000)); // "You ordered 2 droids worth 800 credits!"
console.log(purchaseDroids(0, 400, 1000)); // "You ordered 0 droids worth 0 credits!"