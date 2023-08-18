var shoppingCart ={
    books : 3,
    sunglass : 1,
    keyboard : 5,
    mouse : 1,
    pen : 25
}
// when you know property name use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the value 
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
// console.log(propertyName,propertyValue)

var property = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart)

console.log(shoppingCart);
// console.log(property);
// console.log(propertyValue);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart)
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);

