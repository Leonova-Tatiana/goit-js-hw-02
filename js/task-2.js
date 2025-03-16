function getShippingMessage(country, price, deliveryFee) {
    // Обчислення загальної вартості замовлення
    const totalPrice = price + deliveryFee;
    
    // Повертаємо рядок із повідомленням
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Перевірка коректності роботи функції
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
