var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  
    price: function() {
        let totalPrice = 0;
        for (let service in this) {
            if (!isNaN(parseInt(this[service]))) {
                totalPrice += parseInt(this[service]);
            }
        }
        return totalPrice;
    },
    minPrice: function() {
        let prices = Object.values(this).filter(val => !isNaN(parseInt(val)));
        return Math.min(...prices.map(price => parseInt(price)));
    },
    maxPrice: function() {
        let prices = Object.values(this).filter(val => !isNaN(parseInt(val)));
        return Math.max(...prices.map(price => parseInt(price)));
    }
};

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість наданих послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуги:", services.minPrice() + " грн");
console.log("Максимальна вартість послуги:", services.maxPrice() + " грн");
