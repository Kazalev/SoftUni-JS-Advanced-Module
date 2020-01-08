function solve(fruit, weight, price) {

    weight /= 1000;
    price *= weight;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);