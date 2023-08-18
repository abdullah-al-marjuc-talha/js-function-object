// array vs object

// array
// var name = ['rahim', 'karim', 'samad', 'jamal']
// var age = [12,23,34,45]

// object
// var nameAge =
// {
//     Rahim : 12,
//     Karim : 23,
//     Samad : 34,
//     Jamal : 45
// }


var shoppingCart = {
    books : 3,
    sunglass : 1,
    keyboard : 5,
    mouse : 1,
    pen : 25,
    shoes : 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);


// var keys
for(var i = 0; i < keys.length; i++)
{
    // console.log(keys[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName,propertyValue);

}

// for in loop

for( var propertyName in shoppingCart)
{
    const value = shoppingCart[propertyName]
    console.log(propertyName,value)
}