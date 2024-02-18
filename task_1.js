let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') { // виключаємо методи з виведення інформації
                console.log(key + ": " + this[key]);
            }
        }
    }
};

// Виведення інформації про об'єкт
car.getInfo();

// Додавання нової властивості до об'єкта
car.color = 'blue';

// Виведення інформації про об'єкт після додавання нової властивості
car.getInfo();
