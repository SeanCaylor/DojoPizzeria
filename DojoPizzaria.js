var order = "";
var pizzaIndx = [//0 is crustType, 1 is sauceType, 2 is cheeses, 3 is toppings
    /*0*/["Thin Crust", "New York Style", "Chicago Deep Dish", "Pan Pizza", "Hand Tossed"],
    /*1*/["Traditional", "Marinara", "Alfredo", "Light Sauce", "No Sauce", "Spicy Sauce"],
    /*2*/["Mozzarella", "Feta", "Chedder", "Parmigiano-Reggiano", "Provalone"],
    /*3*/["Pepperoni", "Bacon", "Canadian Bacon", "Pinapple", "Mushrooms", "Olives", "Onions", "Sausage", "Beef", "Chicken"]
];

function pizzaOven(crustType, sauceType, cheeses, toppings){

    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function userInput(choice){
    if (choice === 1){
        order = pizzaOven(pizzaIndx[0][2], pizzaIndx[1][0], [pizzaIndx[2][0]], [pizzaIndx[3][0], pizzaIndx[3][1]]);
    }else if (choice === 2){
        order = pizzaOven(pizzaIndx[0][4], pizzaIndx[1][1], [pizzaIndx[2][1], pizzaIndx[2][2]], [pizzaIndx[3][4], pizzaIndx[3][5], pizzaIndx[3][6]]);
    }else if (choice === 3){
        order = pizzaOven(pizzaIndx[0][3], pizzaIndx[1][5], [pizzaIndx[2][2], pizzaIndx[2][3]], [pizzaIndx[3][1], pizzaIndx[3][2], pizzaIndx[3][3]]);
    }else if (choice === 4){
        order = pizzaOven(pizzaIndx[0][1], pizzaIndx[1][0], [pizzaIndx[2][0], pizzaIndx[2][1], pizzaIndx[2][2], pizzaIndx[2][3], pizzaIndx[2][4]], [pizzaIndx[3][0], pizzaIndx[3][1], pizzaIndx[3][2], pizzaIndx[3][3], pizzaIndx[3][4], pizzaIndx[3][5], pizzaIndx[3][6], pizzaIndx[3][7], pizzaIndx[3][8], pizzaIndx[3][9]])
    }else if (choice === 5){
        order = pizzaOven(//code is the same as above, but displayed for better readibility
            pizzaIndx[0][rndNum(0, pizzaIndx[0].length - 1)],
            pizzaIndx[1][rndNum(0, pizzaIndx[1].length - 1)],
            randoCalrissian(2, pizzaIndx[2].length - 1),
            randoCalrissian(3, pizzaIndx[3].length - 1));
    }

    console.log(order);
}

function rndNum (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randoCalrissian(arr){
    var retArr = [];
    let arrSize = rndNum(1, pizzaIndx[arr].length)

    for (var i = 0; i < arrSize; i++){
        retArr.push(pizzaIndx[arr][rndNum(0, pizzaIndx[arr].length - 1)])
    }
    return retArr;
}

console.log("Welcome to Dojo Pizzaria, please choose your Pizza: ")
console.log("(just type userInput(*) where * is 1 - 4 or 5 for random;")
console.log("1 is the Ninja With A Tommy Gun (chicago style)")
console.log("2 is the Ninja Master (supreme)")
console.log("3 is the Surfin' Ninja (Hawaiian)")
console.log("4 is the Chubby Buddha (everything)")
console.log("5 is Rando Calrissian")