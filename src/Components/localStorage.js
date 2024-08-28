const getCartFromLs = () =>{
    const cartStringified = localStorage.getItem('cart')
    if(cartStringified){
        return JSON.parse(cartStringified);
    }
    return [];
}
const saveCartLs = (cart) =>{
    const Cart = JSON.stringify(cart);
    localStorage.setItem('cart',Cart);
}
const RemoveToLs = (id) =>{
    const cart = getCartFromLs();
    const remaining = cart.filter(idx => idx !==id);
    saveCartLs(remaining);
}
const AddToLs = (id) =>{
    const cart = getCartFromLs();
    cart.push(id);
    saveCartLs(cart);
}
export {AddToLs,getCartFromLs,RemoveToLs}