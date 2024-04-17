function calculateTotalPrice() {
    let weight = parseFloat(document.getElementById("weight").value);
    let priceForOne = parseFloat(document.getElementById("price").value);
    let totalPrice = 0;
    
    switch (true) {
        case weight >= 0 && weight <= 2:
            totalPrice = priceForOne + 40;
            break;
        case weight >= 2 && weight <= 10:
            totalPrice = priceForOne + 60;
            break;
        case weight >= 10 && weight <= 30:
            totalPrice = priceForOne + 80;
            break;
        case weight >= 30:
            alert("Вага завелика");
            break;
        default:
            alert("Вага введена неправильно");
    }
    
    if (document.getElementById("tax").checked) { 
        totalPrice *= 1.02;
    }

    document.getElementById("totalCost").value = totalPrice;
}