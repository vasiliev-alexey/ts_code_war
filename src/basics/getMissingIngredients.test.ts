function getMissingIngredients(recipe, added) {

    let missing = {},
        arr = [],
        quantity = 0;
    for (let ingredient in recipe) {
        if (typeof(added[ingredient]) === 'undefined') {
            added[ingredient] = 0;
        }
        arr.push(Math.ceil(added[ingredient] / recipe[ingredient]));
    }
      quantity = Math.max(... arr);
    if (quantity === 0) {
        missing = recipe;
    } else {
        for ( let ingredient in recipe) {
            if ((quantity * recipe[ingredient]) - added[ingredient] !== 0 ) {
                missing[ingredient] = (quantity * recipe[ingredient]) - added[ingredient];
            }
        }
    }
    return missing;
}

describe( "test", () => {

    const  recipe  = {flour: 200, eggs: 1, sugar: 100};
    it(" tt" , () => {
       expect(getMissingIngredients(recipe, {flour: 50, eggs: 1})).toEqual( {flour: 150, sugar: 100})
        expect(getMissingIngredients(recipe, {})).toEqual( {flour: 200, eggs: 1, sugar: 100});
        expect(getMissingIngredients(recipe, {flour: 500, sugar: 200})).toEqual(  {flour: 100, eggs: 3, sugar: 100});
    })

})






