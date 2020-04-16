// ========================================================
// Level 1 Challenges
// ========================================================
const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================
const shoppingcart = []
const createItem = (name, price)=>{
    const object = {"name": name, "price": price}
    return object
}
const createShoppingcart = ()=>{
    return shoppingcart
}
const additem = (name, price) =>{
    shoppingcart.push(createItem(name,price))
}
const cartSize = () =>{
    return shoppingcart.length
}
const removeItem = (name) =>{
    index = undefined
    for (i=0;i<shoppingcart.length; i++){
        if (shoppingcart[i].name == name){
            index = i
        }
    }
    if (index != undefined && index > -1) {
     shoppingcart.splice(index, 1);
 }else {
     console.log("PRODUCT NOT FOUND", index)
 }
    return
}


module.exports = {
  sayHello, area, perimeter, circleArea,createItem,createShoppingcart, additem, cartSize, removeItem
}
