function getElementWidth(content, padding, border) {
    // Перетворення значень у числа, видаляючи 'px'
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Для обох сторін
    const borderWidth = parseFloat(border) * 2;   // Для обох сторін
    
    // Обчислення загальної ширини елемента
    return contentWidth + paddingWidth + borderWidth;
}

// Перевірка коректності роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
